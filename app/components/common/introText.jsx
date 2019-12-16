import React, { Component } from 'react'
import { string } from 'prop-types'

class IntroText extends Component {
  static propTypes = {
    introText: string
  }

  static defaultProps = {
    introText: 'Welcome'
  }

  constructor(props) {
    super(props)
    const { introText } = this.props

    this.state = {
      introText
    }
  }

  componentWillReceiveProps(props) {
    const { introText } = props
    this.setState({
      introText
    })
  }

  render() {
    const { introText } = this.state
    return (
      <div className="mb_introText">
        {introText}
      </div>
    )
  }
}

export default IntroText
