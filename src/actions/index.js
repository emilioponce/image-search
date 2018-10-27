import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_STARTED
} from './types'

import axios from 'axios'

export const fetchImages = ({ keyword }) => {
  const ENDPOINT = `https://jsonplaceholder.typicode.com/${keyword}`
  return dispatch => {
    dispatch(fetchImageStarted())
    axios
      .get(ENDPOINT)
      .then(res => {
        dispatch(fetchImagesSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchImagesFailure(err.message))
      })
  }
}

const fetchImageStarted = () => ({
  type: FETCH_IMAGES_STARTED
})

const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: {
    ...images
  }
})

const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: {
    error
  }
})
