import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageSection extends Component {
  static propTypes = {
    content: arrayOf(any),
    sectionHeading: string,
    introText: string
  }

  static defaultProps = {
    content: [],
    sectionHeading: 'Heading',
    introText: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      content: props.content,
      sectionHeading: props.sectionHeading,
      introText: props.introText
    }
  }

  render() {
    const {
      content, sectionHeading, introText
    } = this.state

    return (
      <div className="mb_pageSection col-12">
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {introText && <div className="subHeader strong">{introText}</div>}

        {content.length > 0 && content.map(paragraph => (
          <div key={uuid()} className="mb_paragraph">{paragraph.content}</div>
        ))}
      </div>
    )
  }
}

export default PageSection
