import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import moment from 'moment'
import { DATE_MASK } from '../config/constants'

import 'react-image-lightbox/style.css'
import './Image.css'

class Image extends Component {
  state = {
    isOpen: false
  }

  openLightBox = () => {
    this.setState({ isOpen: true })
  }

  closeLightBox = () => {
    this.setState({ isOpen: false })
  }

  render = () => {
    const { url, urlBig, title, date, owner, description } = this.props
    const { isOpen } = this.state

    const humanReadableDate = moment.unix(date).format(DATE_MASK)

    return (
      <div className="image" onClick={this.openLightBox}>
        <div>
          <img src={url} />
        </div>
        <div className="caption">
          {title.length > 20 ? title.slice(0, 12).concat(' ...') : title}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={urlBig}
            onCloseRequest={this.closeLightBox}
            imageTitle={title}
            imageCaption={`${description._content} (Owner: ${owner}. Uploaded: ${humanReadableDate}) `}
          />
        )}
      </div>
    )
  }
}

Image.propTypes = {
  url: PropTypes.string,
  urlBig: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  owner: PropTypes.string,
  description: PropTypes.object
}

export default Image
