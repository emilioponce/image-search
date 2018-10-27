import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'

import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ keyword: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { keyword } = this.state
    this.props.fetchImages({ keyword })
    this.setState({ keyword: '' })
  }

  render() {
    const { keyword } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" value={keyword} onChange={this.handleChange} />
        </div>
        <button type="submit">SEARCH</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: keyword => dispatch(fetchImages(keyword))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
