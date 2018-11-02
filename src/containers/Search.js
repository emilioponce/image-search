import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchImages } from '../actions'
import { FIRST_PAGE } from '../config/constants'

import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  handleChange = event => {
    this.setState({ keyword: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { keyword } = this.state

    if (keyword !== '') {
      this.props.fetchImages(keyword, FIRST_PAGE)
    }
  }

  render = () => {
    const { keyword } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="wrapperSearch">
          <input
            type="text"
            value={keyword}
            onChange={this.handleChange}
            placeholder="Search a term ..."
            className="input"
          />
          <button type="submit" className="button ">
            SEARCH
          </button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: (keyword, page) => dispatch(fetchImages(keyword, page))
  }
}

Search.propTypes = {
  fetchImages: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
