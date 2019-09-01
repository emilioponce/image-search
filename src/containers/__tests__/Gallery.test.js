import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Gallery } from '../Gallery'

configure({ adapter: new Adapter() })

const mockFetchImagesFn = jest.fn()

const component = (
  <Gallery
    images={{}}
    keyword={'cats'}
    page={1}
    loading={false}
    fetchImages={mockFetchImagesFn}
  />
)

describe('Gallery component', () => {
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

  it("Should show a Spinner if it's loading", () => {
    const component = (
      <Gallery
        images={{}}
        keyword={'cats'}
        page={1}
        loading={true}
        fetchImages={mockFetchImagesFn}
      />
    )
    let wrapper = shallow(component)
    expect(wrapper.find('.Gallery').text()).toBe('<Loader />')
  })

  it('Should show an empty gallery', () => {
    expect(wrapper.find('.Gallery').text()).toBe('')
  })

  it('Should show a message for no results found', () => {
    const component = (
      <Gallery
        images={{ photos: {} }}
        keyword={'cats'}
        page={1}
        loading={false}
        fetchImages={mockFetchImagesFn}
      />
    )
    let wrapper = shallow(component)
    expect(wrapper.find('.Gallery').text()).toBe('No results found')
  })

  // NOTE:  we don't test Pagination as is a 3rd party library
})
