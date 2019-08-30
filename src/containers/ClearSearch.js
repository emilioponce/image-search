import React from 'react'
import { connect } from 'react-redux'
import { getTotalAmountOfResultsSelector } from '../reducers/search'
import PropTypes from 'prop-types'
import { clearSearch } from '../actions'

import './ClearSearch.css'

const ClearSearch = ({ total, clearSearch }) => {
  const handleClick = () => {
    clearSearch()
  }

  return (
    <button
      type="submit"
      className="button"
      onClick={handleClick}
      disabled={!total}
    >
      Clear search
    </button>
  )
}

// to retrieve the amount of results in order to conditionallly render the button disabled
const mapStateToProps = state => {
  return {
    total: getTotalAmountOfResultsSelector(state)
  }
}

// to dispatch actions to clear the search
const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch())
  }
}

ClearSearch.propTypes = {
  total: PropTypes.string,
  clearSearch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearSearch)
