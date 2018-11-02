import React from 'react'
import PropTypes from 'prop-types'

import './Image.css'

const Image = ({ url, caption }) => {
  let finalCaption =
    caption.length > 20 ? caption.slice(0, 15).concat(' ...') : caption

  return (
    <div className="image">
      <div>
        <img src={url} />
      </div>
      <div className="caption">{finalCaption}</div>
    </div>
  )
}

Image.propTypes = {
  url: PropTypes.string,
  caption: PropTypes.string
}

export default Image
