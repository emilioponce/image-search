import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Image from '../components/Image'

import './Gallery.css'

const Gallery = ({ images }) => {
  if (_.isEmpty(images)) {
    return <div className="Gallery" />
  }

  let photos = images.photo

  return (
    <div className="Gallery">
      {photos.map(photo => (
        <Image key={photo.id} url={photo.url_q} caption={photo.title} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return { images: state.search.images }
}

export default connect(mapStateToProps)(Gallery)
