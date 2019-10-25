import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

configure({ adapter: new Adapter() })

describe('The App component should', () => {
  it('contain 2 NavLinks', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('NavLink').length).toEqual(2)
  })
})
