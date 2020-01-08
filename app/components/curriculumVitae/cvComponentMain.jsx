import React, { Component } from 'react'
import pageContent from './content/curriculumVitae.json'
import IntroText from '../common/introText'
import PageSectionSkills from '../common/pageSectionSkills'
import PageSectionAddress from '../common/pageSectionAddress'
import PageSectionDetails from '../common/pageSectionDetails'
import PageSectionEducation from '../common/pageSectionEducation'
import PageSectionWork from '../common/pageSectionWork'
// import uuid from '../../../node_modules/uuid'

class CvComponent extends Component {
  state = {
    introText: 'Welcome',
    pageSections: null
  }

  componentDidMount() {
    this.setState({
      introText: pageContent.introText,
      pageSections: pageContent.pageSections
    })
  }

  render() {
    const { introText, pageSections } = this.state

    return (
      <div className="mb_page">
        {pageSections && (
          <div>
            <IntroText introText={introText} />
            <div className="row">
              <PageSectionDetails
                sectionHeading={pageSections.details.sectionHeading}
                content={pageSections.details.textDetails}
              />

              <PageSectionAddress
                sectionHeading={pageSections.address.sectionHeading}
                content={pageSections.address.textAddress}
              />
            </div>

            <div className="row">
              <PageSectionEducation
                sectionHeading={pageSections.education.sectionHeading}
                content={pageSections.education.textEducation}
              />
            </div>

            <div className="row">
              <PageSectionSkills
                sectionHeading={pageSections.skills.sectionHeading}
                content={pageSections.skills.textParagraphs}
                introText={pageSections.skills.introText}
              />
            </div>

            <div className="row">
              <PageSectionWork
                sectionHeading={pageSections.work.sectionHeading}
                content={pageSections.work.workPeriods}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CvComponent
