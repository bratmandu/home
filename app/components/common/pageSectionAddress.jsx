import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageSectionAddress extends Component {
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

    return (
      <div className="mb_pageSection col-6">
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {content.length > 0 && content.map(addressLine => (
          <div key={uuid()} className="mb_address">
            <div>{addressLine.street}</div>
            <div>{addressLine.town}</div>
            <div>{addressLine.county}</div>
            <div>{addressLine.postcode}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default PageSectionAddress
