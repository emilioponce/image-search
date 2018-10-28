import React from 'react'

import './Image.css'

const Image = ({ url, caption }) => {
  let finalCaption =
    caption.length > 20 ? caption.slice(0, 20).concat(' ...') : caption

  return (
    <div className="image">
      <div>
        <img src={url} />
      </div>
      <div className="caption">{finalCaption}</div>
    </div>
  )
}

export default Image
