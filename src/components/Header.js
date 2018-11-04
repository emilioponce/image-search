import React, { Component } from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="Wrapper">
      <div className="Header">
        <div className="Title">Image Search</div>
        <div className="Subtitle">
          A Flickr Search Gallery using react & redux
        </div>
      </div>
    </div>
  )
}

export default Header
