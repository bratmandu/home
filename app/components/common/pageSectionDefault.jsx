import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import PageList from '../common/pageList'
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
      <div className="mb_pageSection">
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {content.length > 0 && content.map(paragraph => (
          <div key={uuid()} className="mb_paragraph">
            {paragraph.content}
            {paragraph.list && paragraph.list.length > 0 && (
              <PageList
                list={paragraph.list}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default PageSection
