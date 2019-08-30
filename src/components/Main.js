import React from 'react'

import SearchArea from './SearchArea'
import Gallery from '../containers/Gallery'

import './Main.css'

const Main = () => {
  return (
    <div className="Main">
      <SearchArea />
      <Gallery />
    </div>
  )
}

export default Main
