import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Footer from '../Footer'

describe('Footer component', () => {
  const component = <Footer />

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
