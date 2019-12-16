import React, { Component } from 'react'
import { arrayOf, any } from 'prop-types'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from './utilities/hamburgerMenu'

class Nav extends Component {
  static propTypes = {
    appLinks: arrayOf(any)
  }

  static defaultProps = {
    appLinks: []
  }

  constructor(props) {
    super(props)
    this.state = {
      appLinks: props.appLinks
    }
  }

  render() {
    const { appLinks } = this.state

    return (
      <header className="navbar navbar-expand-lg sticky-top">
        <div className="navbar-brand h3 m-0 mr-3">Navigation &gt;</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            {/* replace with icon */}
            {HamburgerMenu()}
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            { appLinks.length
                && appLinks.map(link => (
                  <li className="nav-item" key={link.key}>
                    <NavLink exact={link.default} activeClassName="active" className="nav-link" to={link.path}>
                      {link.name}
                    </NavLink>
                  </li>
                ))
            }
          </ul>
          <span className="navbar-text">
            A single page responsive Web Application, built with React. By Michael Bratton
          </span>
        </div>
      </header>
    )
  }
}

export default Nav
