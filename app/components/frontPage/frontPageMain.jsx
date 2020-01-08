import React, { Component } from 'react'
import pageContent from './content/frontPage.json'
import IntroText from '../common/introText'
import PageSectionDefault from '../common/pageSectionDefault'
import uuid from '../../../node_modules/uuid'

class FrontPageComponent extends Component {
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

    return (
      <div className="mb_page">
        <IntroText introText={introText} />
        { pageSections.length && pageSections.map(pageSection => (
          <PageSectionDefault
            key={uuid()}
            sectionHeading={pageSection.sectionHeading}
            content={pageSection.textParagraphs}
          />
        ))
        }
      </div>
    )
  }
}

export default FrontPageComponent
