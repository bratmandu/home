import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import FrontPageMain from './frontPage/frontPageMain'
import CvComponentMain from './curriculumVitae/cvComponentMain'
import SampleApp from './sampleReactApp01/sampleApp'
import '../../styles/styleMain.scss'

class App extends Component {
  state = {
    appLinks: []
  }

  componentDidMount() {
    const appLinks = [
      {
        key: 1,
        path: '/',
        component: FrontPageMain,
        name: 'Home',
        default: true
      }, {
        key: 2,
        path: '/CV',
        component: CvComponentMain,
        name: 'My CV'
      }, {
        key: 3,
        path: '/SampleApp',
        component: SampleApp,
        name: 'Sample React App'
      }
    ]
    this.setLinks(appLinks)
  }

  setLinks = (appLinks) => {
    this.setState({
      appLinks
    })
  }

  render() {
    const { appLinks } = this.state
    return (
      <div className="app">
        { appLinks.length
          && (
            <BrowserRouter>
              <Nav appLinks={appLinks} />
              <div>
                {appLinks.map(link => (
                  <Route exact={link.default} key={link.key} path={link.path} component={link.component} />
                ))}
              </div>
            </BrowserRouter>
          )
        }
      </div>
    )
  }
}
export default App
