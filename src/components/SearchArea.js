import React from 'react'
import Search from '../containers/Search'
import ClearSearch from '../containers/ClearSearch'
import Status from '../containers/Status'

import './SearchArea.css'

const SearchArea = () => {
  return (
    <>
      <div className="SearchArea">
        <Search />
        <ClearSearch />
      </div>
      <Status />
    </>
  )
}

export default SearchArea
