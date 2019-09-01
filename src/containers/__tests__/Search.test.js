import React from 'react'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Strategy: testing the component 'Search' ALONE, without being connected to redux
// more info: https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c
import { Search } from '../Search'

configure({ adapter: new Adapter() })

const mockModifyKeywordFn = jest.fn()
const mockFetchImagesFn = jest.fn()

const component = (
  <Search
    keyword={'cats'}
    modifyKeyword={mockModifyKeywordFn}
    fetchImages={mockFetchImagesFn}
  />
)

describe('Search component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(component)
  })

  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Snapshot matches', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call the fetch Images function once', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(mockFetchImagesFn.mock.calls.length).toBe(1)
  })

  it('Should let the user introduce text in the input field', () => {
    const changeEvent = {
      target: { value: 'cats' }
    }
    wrapper.find('input').simulate('change', changeEvent)
    expect(wrapper.find('input').props().value).toEqual('cats')
    expect(mockModifyKeywordFn.mock.calls.length).toBe(1)
  })
})
