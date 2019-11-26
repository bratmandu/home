import React, { Component } from 'react'
import { arrayOf, any } from 'prop-types'
import { NavLink } from 'react-router-dom'

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">Navigation</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
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
        </div>
      </nav>
    )
  }
}

export default Nav
