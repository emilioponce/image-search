import React, { Component } from 'react'

import './Image.css'

const Image = props => {
  return (
    <div className="Image">
      <div>
        <img src="https://via.placeholder.com/150" />
      </div>
      <div>{props.caption}</div>
    </div>
  )
}

export default Image
