import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Image from '../Image'

configure({ adapter: new Adapter() })

const props = {
  id: jest.fn(),
  url_q: 'https://farm2.staticflickr.com/1968/30605441267_65d5469660_q.jpg',
  urlBig: 'https://farm2.staticflickr.com/1968/30605441267_65d5469660.jpg',
  title: 'title text',
  dateupload: '1541339304',
  ownername: 'owner',
  decription: { _content: 'image description' }
}

const component = (
  <Image
    key={props.id}
    url={props.url_q}
    urlBig={props.url_m}
    title={props.title}
    date={props.dateupload}
    owner={props.ownername}
    description={props.description}
  />
)

describe('Image component', () => {
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

  //@TODOS (possible):
  // NOTE: Not sure about testing this. it's something from a 3rd party and it's not necessary to test it
  // 1. when clicking in the image, the lightbox opens
  // 2. when clicking in the x button, the image lightbox close
})
