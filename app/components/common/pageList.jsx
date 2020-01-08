import React, { Component } from 'react'
import { arrayOf, any } from 'prop-types'
import uuid from '../../../node_modules/uuid'


class PageList extends Component {
  static propTypes = {
    list: arrayOf(any)
  }

  static defaultProps = {
    list: []
  }

  constructor(props) {
    super(props)

    this.state = {
      list: props.list
    }
  }

  render() {
    const {
      list
    } = this.state

    return (
      <ul className="mb_pageSectionList">
        {list.length > 0 && list.map(listItem => (
          <li key={uuid()}>
            {listItem.content}
          </li>
        ))}
      </ul>
    )
  }
}

export default PageList
