import React, { Component } from 'react'

import Search from './Search'
import Gallery from './Gallery'

import './Main.css'

const Main = () => {
  return (
    <div className="Main">
      <Search />
      <Gallery />
    </div>
  )
}

export default Main
