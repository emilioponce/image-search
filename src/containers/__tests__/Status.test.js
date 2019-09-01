import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Status } from '../Status'

configure({ adapter: new Adapter() })

const component = <Status total={'1'} />

describe('Status component', () => {
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

  it('Should show an exact text for less than a big amount of results', () => {
    const component = <Status total={'100'} />
    const wrapper = shallow(component)
    expect(wrapper.find('.Status').text()).toBe('Results found (100 images)')
  })

  it('Should show an exact text for a big amount of results', () => {
    const component = <Status total={'1001'} />
    const wrapper = shallow(component)
    expect(wrapper.find('.Status').text()).toBe(
      'Large amount of results (1001 images)'
    )
  })
})
