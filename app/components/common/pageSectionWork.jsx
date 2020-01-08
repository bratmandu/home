import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageSection extends Component {
  static propTypes = {
    content: arrayOf(any),
    sectionHeading: string
  }

  static defaultProps = {
    content: [],
    sectionHeading: 'Heading'
  }

  constructor(props) {
    super(props)

    this.state = {
      content: props.content,
      sectionHeading: props.sectionHeading
    }
  }

  render() {
    const {
      content, sectionHeading
    } = this.state

    return (
      <div className="mb_pageSection col-12">
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {content.length > 0 && content.map(workPeriod => (
          <div key={uuid()} className="mb_work">
            <div className="strong">{workPeriod.years}, {workPeriod.title} at {workPeriod.location}</div>
            <div>{workPeriod.textParagraphs.map(paragraph => (
              <div key={uuid()} className="mb_work-summary">
                <div>{paragraph.content}</div>
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
