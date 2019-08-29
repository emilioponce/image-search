import React from 'react'

import Search from '../containers/Search'
import Gallery from '../containers/Gallery'

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