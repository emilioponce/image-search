import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ClearSearch } from '../ClearSearch'

configure({ adapter: new Adapter() })

const mockClearSearchFn = jest.fn()

const component = <ClearSearch total={'0'} clearSearch={mockClearSearchFn} />

describe('ClearSearch component', () => {
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

  it('Should call the clear search function once', () => {
    wrapper.find('button').simulate('click', { preventDefault() {} })
    expect(mockClearSearchFn.mock.calls.length).toBe(1)
  })

  it('Should show the button disabled if total is null', () => {
    const component = <ClearSearch total={null} clearSearch={jest.fn()} />
    let wrapper = shallow(component)
    expect(wrapper.find('button').props().disabled).toBe(true)
  })

  it('Should show the button enabled if total has a value', () => {
    const component = <ClearSearch total={'1'} clearSearch={jest.fn()} />
    let wrapper = shallow(component)
    expect(wrapper.find('button').props().disabled).toBe(false)
  })
})
