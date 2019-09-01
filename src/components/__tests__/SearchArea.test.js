import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import SearchArea from '../SearchArea'

jest.mock('../../containers/Search', () => 'mock-search')
jest.mock('../../containers/ClearSearch', () => 'mock-clearsearch')
jest.mock('../../containers/Status', () => 'mock-status')

describe('SearchArea component', () => {
  const component = <SearchArea />

  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Snapshot matchs', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
