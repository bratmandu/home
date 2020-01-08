import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageSection extends Component {
  static propTypes = {
    sectionHeading: string,
    content: arrayOf(any)
  }

  static defaultProps = {
    sectionHeading: 'Heading',
    content: []
  }

  constructor(props) {
    super(props)

    this.state = {
      sectionHeading: props.sectionHeading,
      content: props.content
    }
  }

  render() {
    const {
      sectionHeading, content
    } = this.state

    // TODO - get summaries with length > 5 to split into two columns

    return (
      <div className="mb_pageSection col-12">
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {content.length > 0 && content.map(education => (
          <div key={uuid()} className="mb_education">
            <div className="strong">{education.years}</div>
            <div>{education.summary.length > 0 && education.summary.map(summary => (
              <div key={uuid()} className="mb_education-summary">
                <div>{summary.course} - {summary.grade}</div>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PageSection
