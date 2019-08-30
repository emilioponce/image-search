import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchImages } from '../actions'
import { FIRST_PAGE } from '../config/constants'

import './Search.css'

class Search extends Component {
  state = {
    keyword: ''
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
    console.log(
      `RENDER keyword store: state:${this.state.keyword}, props:${this.props.keyword}`
    )

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="wrapperSearch">
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleChange}
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
}

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchImages }, dispatch)
}

Search.propTypes = {
  fetchImages: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
