import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Image from '../Image'

describe('Image component', () => {
  const imageMock = {
    id: jest.fn(),
    url_q: 'https://farm2.staticflickr.com/1968/30605441267_65d5469660_q.jpg',
    caption: 'title text'
  }

  const component = (
    <Image
      key={imageMock.id}
      url={imageMock.url_q}
      caption={imageMock.caption}
    />
  )

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
