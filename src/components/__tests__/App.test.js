import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import App from '../App'

jest.mock('../Header', () => 'mock-header')
jest.mock('../Main', () => 'mock-main')
jest.mock('../Footer', () => 'mock-footer')

describe('App component', () => {
  const component = <App />
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
