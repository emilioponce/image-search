import React from 'react'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchArea from '../SearchArea'

configure({ adapter: new Adapter() })

jest.mock('../../containers/Search', () => 'mock-search')
jest.mock('../../containers/ClearSearch', () => 'mock-clearsearch')
jest.mock('../../containers/Status', () => 'mock-status')

const component = <SearchArea />

describe('SearchArea component', () => {
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
