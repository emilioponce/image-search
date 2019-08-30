import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchImages, modifyKeyword } from '../actions'
import { FIRST_PAGE } from '../config/constants'

import './Search.css'

const Search = ({ keyword, modifyKeyword, fetchImages }) => {
  const handleChange = event => {
    modifyKeyword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (keyword !== '') {
      fetchImages(keyword, FIRST_PAGE)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapperSearch">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a term ..."
          className="input"
        />
        <button type="submit" className="button ">
          Search
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchImages, modifyKeyword }, dispatch)
}

Search.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  modifyKeyword: PropTypes.func.isRequired,
  keyword: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
