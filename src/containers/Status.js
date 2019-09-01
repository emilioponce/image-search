import { connect } from 'react-redux'
import React from 'react'
import { getTotalAmountOfResultsSelector } from '../reducers/selectors'
import { BIG_AMOUNT_OF_RESULTS } from '../config/constants'
import PropTypes from 'prop-types'

import './Status.css'

const Status = ({ total }) => {
  if (!total) {
    return null
  }

  const text =
    total > BIG_AMOUNT_OF_RESULTS ? `Large amount of results` : `Results found`
  return <div className="Status">{`${text} (${total} images)`}</div>
}

const mapStateToProps = state => {
  return {
    total: getTotalAmountOfResultsSelector(state)
  }
}

Status.propTypes = {
  total: PropTypes.string
}

export default connect(
  mapStateToProps,
  null
)(Status)
