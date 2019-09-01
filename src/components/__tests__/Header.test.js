import React from 'react'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../Header'

configure({ adapter: new Adapter() })

const component = <Header />

describe('Header component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Snapshot matchs', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })
})
