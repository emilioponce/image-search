import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchImages } from '../actions'

import './Search.css'

class Search extends Component {
  constructor() {
    super()
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
      this.props.fetchImages(keyword)
      this.setState({ keyword: '' })
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
    fetchImages: keyword => dispatch(fetchImages(keyword))
  }
}

Search.propTypes = {
  fetchImages: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
