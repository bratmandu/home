import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import AppLinks from './utilities/appLinks'
import '../../styles/styleMain.scss'

class App extends Component {
  state = {
    appLinks: []
  }

  componentDidMount() {
    const appLinks = AppLinks()
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
            <BrowserRouter basename="/">
              <Nav appLinks={appLinks} />
              <div className="container py-4 mb-5">
                {appLinks.map(link => (
                  <Route exact={link.default} key={link.key} path={link.path} component={link.component} />
                ))}
              </div>
              <Footer />
            </BrowserRouter>
          )
        }
      </div>
    )
  }
}
export default App
