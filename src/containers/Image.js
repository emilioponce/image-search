import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import moment from 'moment'

import 'react-image-lightbox/style.css'
import './Image.css'

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openLightBox = this.openLightBox.bind(this)
    this.closeLightBox = this.closeLightBox.bind(this)
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

    const humanReadableDate = moment.unix(date).format('MM/DD/YYYY')

    return (
      <div className="image" onClick={this.openLightBox}>
        <div>
          <img src={url} />
        </div>
        <div className="caption">
          {title.length > 20 ? title.slice(0, 15).concat(' ...') : title}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={urlBig}
            onCloseRequest={this.closeLightBox}
            imageTitle={title}
            imageCaption={`${
              description._content
            } (Owner: ${owner}. Uploaded: ${humanReadableDate}) `}
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
