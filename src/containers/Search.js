import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'

import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  handleInput = e => {
    this.setState({ keyword: e.target.value })
  }

  handleClick = () => {
    const { keyword } = this.state
    //TODO 1 is a placeholder before pagination
    fetchImages(1)
  }

  render = () => {
    return (
      <div>
        <div>
          Keyword:{' '}
          <input
            type="text"
            className="input"
            placeholder="Search images..."
            onChange={this.handleInput}
          />
        </div>
        <button type="button" onClick={this.handleClick}>
          Search
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { fetchImages }
)(Search)
