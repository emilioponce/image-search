import React from 'react'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'

configure({ adapter: new Adapter() })

jest.mock('../Main', () => 'mock-main')

const component = <App />

describe('App component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Snapshot matches', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })
})
