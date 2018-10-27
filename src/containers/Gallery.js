import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Image from '../components/Image'

import './Gallery.css'

const Gallery = ({ images }) => {
  if (_.isEmpty(images)) {
    return <div />
  }

  console.log('IMAGES', images[0][0].title)
  return (
    <div className="Gallery">
      <Image url="url" caption={images[0][0].title} />
    </div>
  )
}

const mapStateToProps = state => {
  return { images: state.search.images }
}

export default connect(mapStateToProps)(Gallery)
