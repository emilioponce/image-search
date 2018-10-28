import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'

import Image from '../components/Image'

import './Gallery.css'

const Gallery = ({ images }) => {
  if (_.isEmpty(images)) {
    return <div className="Gallery" />
  }

  let photos = images.photo

  if (_.isEmpty(photos)) {
    return <div className="Gallery">No results found</div>
  }

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

Gallery.propTypes = {
  images: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Gallery)
