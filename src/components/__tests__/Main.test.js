import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Main from '../Main'

jest.mock('../../containers/Search', () => 'mock-search')
jest.mock('../../containers/Gallery', () => 'mock-gallery')
jest.mock('../../containers/ClearSearch', () => 'mock-clearSearch')
jest.mock('../../containers/Status', () => 'mock-status')

describe('Main component', () => {
  const component = <Main />

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
