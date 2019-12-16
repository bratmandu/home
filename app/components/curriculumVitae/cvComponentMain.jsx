import React, { Component } from 'react'
import pageContent from './content/curriculumVitae.json'
import IntroText from '../common/introText'
import PageSection from '../common/pageSection'
import uuid from '../../../node_modules/uuid'

class CvComponent extends Component {
  state = {
    introText: 'Welcome',
    pageSections: []
  }

  componentDidMount() {
    this.setState({
      introText: pageContent.introText,
      pageSections: pageContent.pageSections
    })
  }

  render() {
    const { introText, pageSections } = this.state

    console.log('cv page sections: ', pageSections)

    return (
      <div className="mb_page">
        <IntroText introText={introText} />
        { pageSections.length && pageSections.map(pageSection => (
          <PageSection
            key={uuid()}
            sectionHeading={pageSection.sectionHeading}
            textParagraphs={pageSection.textParagraphs}
            textDetails={pageSection.textDetails}
            textAddress={pageSection.textAddress}
            textEducation={pageSection.textEducation}
            introText={pageSection.introText}
            workPeriods={pageSection.workPeriods}
          />
        ))
        }
      </div>
    )
  }
}

export default CvComponent
