import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'
import Loader from 'react-loader-spinner'

import Image from './Image'
import { fetchImages } from '../actions'
import { PAGE_RANGE } from '../config/constants'
import { getSearchResultsSelector } from '../reducers/search'

import './Gallery.css'

const Gallery = ({ images, keyword, page, loading, fetchImages }) => {
  const handlePageChange = page => {
    fetchImages(keyword, page)
  }

  if (loading) {
    return (
      <div className="Gallery">
        <div className="Loading">
          <Loader type="TailSpin" color="#61dafb" height="100" width="100" />
        </div>
      </div>
    )
  }

  if (_.isEmpty(images)) {
    return <div className="Gallery" />
  }

  let photos = images.photo

  if (_.isEmpty(photos)) {
    return <div className="Gallery">No results found</div>
  }

  return (
    <div className="Gallery">
      <Pagination
        activePage={page}
        itemsCountPerPage={images.perpage}
        totalItemsCount={images.total}
        pageRangeDisplayed={PAGE_RANGE}
        onChange={handlePageChange}
      />
      <div className="Images">
        {photos.map(photo => (
          <Image
            key={photo.id}
            url={photo.url_q}
            urlBig={photo.url_m}
            title={photo.title}
            date={photo.dateupload}
            owner={photo.ownername}
            description={photo.description}
          />
        ))}
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={images.perpage}
        totalItemsCount={images.total}
        pageRangeDisplayed={PAGE_RANGE}
        onChange={handlePageChange}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return getSearchResultsSelector(state)
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchImages }, dispatch)
  /* NOTE that exists an alternative way without bindActionCreators. Dispatching 
  the action by hand. IT's more explicit, but verbose.
   return {
     fetchImages: (keyword, page) => dispatch(fetchImages(keyword, page))
   } 
   */
}

Gallery.propTypes = {
  images: PropTypes.object.isRequired,
  keyword: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchImages: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
