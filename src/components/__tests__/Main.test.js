import React from 'react'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Main from '../Main'

configure({ adapter: new Adapter() })

jest.mock('../../containers/Search', () => 'mock-search')
jest.mock('../../containers/Gallery', () => 'mock-gallery')
jest.mock('../../containers/ClearSearch', () => 'mock-clearSearch')
jest.mock('../../containers/Status', () => 'mock-status')

const component = <Main />

describe('Main component', () => {
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
