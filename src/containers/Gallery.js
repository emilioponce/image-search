import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'

import Image from '../components/Image'
import { fetchImages } from '../actions'
import { PAGE_RANGE } from '../config/constants'

import './Gallery.css'

class Gallery extends Component {
  handlePageChange = page => {
    const { keyword } = this.props
    this.props.fetchImages(keyword, page)
  }

  render = () => {
    const { images } = this.props
    const { page } = this.props

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
          onChange={this.handlePageChange}
        />
        <div className="Images">
          {photos.map(photo => (
            <Image key={photo.id} url={photo.url_q} caption={photo.title} />
          ))}
        </div>
        <Pagination
          activePage={page}
          itemsCountPerPage={images.perpage}
          totalItemsCount={images.total}
          pageRangeDisplayed={PAGE_RANGE}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.search.images,
    keyword: state.search.keyword,
    page: state.search.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: (keyword, page) => dispatch(fetchImages(keyword, page))
  }
}

Gallery.propTypes = {
  images: PropTypes.object.isRequired,
  keyword: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  fetchImages: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
