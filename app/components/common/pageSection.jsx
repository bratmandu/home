import React, { Component } from 'react'
import { arrayOf, any, string } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageSection extends Component {
  static propTypes = {
    textParagraphs: arrayOf(any),
    sectionHeading: string,
    textDetails: arrayOf(any),
    textAddress: arrayOf(any),
    textEducation: arrayOf(any),
    introText: string,
    workPeriods: arrayOf(any)
  }

  static defaultProps = {
    textParagraphs: [],
    sectionHeading: 'Heading',
    textDetails: [],
    textAddress: [],
    textEducation: [],
    introText: '',
    workPeriods: []
  }

  constructor(props) {
    super(props)

    this.state = {
      textParagraphs: props.textParagraphs,
      sectionHeading: props.sectionHeading,
      textDetails: props.textDetails,
      textAddress: props.textAddress,
      textEducation: props.textEducation,
      introText: props.introText,
      workPeriods: props.workPeriods
    }
  }

  // lets have a component for each type of section

  render() {
    const {
      textParagraphs, sectionHeading, textDetails, textAddress, textEducation, introText, workPeriods
    } = this.state

    console.log('textpras: ', textParagraphs)
    console.log('details: ', textDetails, textAddress, textEducation, workPeriods)

    return (
      <div className="mb_pageSection">
        {sectionHeading && <h2>{sectionHeading}</h2>}

        {textDetails.length > 0 && textDetails.map(detail => (
          <div key={uuid()} className="mb_details">
            <div>{detail.title}</div>
            <div>{detail.value}</div>
          </div>
        ))}

        {textAddress.length > 0 && textAddress.map(addressLine => (
          <div key={uuid()} className="mb_address">
            <div>{addressLine.street}</div>
            <div>{addressLine.town}</div>
            <div>{addressLine.county}</div>
            <div>{addressLine.postcode}</div>
          </div>
        ))}

        {textEducation.length > 0 && textEducation.map(education => (
          <div key={uuid()} className="mb_education">
            <div>{education.years}</div>
            <div>{education.summary.length > 0 && education.summary.map(summary => (
              <div key={uuid()} className="mb_education-summary">
                <div>{summary.course}</div>
                <div>{summary.grade}</div>
              </div>
            ))}
            </div>
          </div>
        ))}

        {introText && <h5>{introText}</h5>}

        {textParagraphs.length > 0 && textParagraphs.map(paragraph => (
          <div key={uuid()} className="mb_paragraph">{paragraph.content}</div>
        ))}

        {workPeriods.length > 0 && workPeriods.map(workPeriod => (
          <div key={uuid()} className="mb_work">
            <div>{workPeriod.years}</div>
            <div>{workPeriod.title}</div>
            <div>{workPeriod.location}</div>
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
