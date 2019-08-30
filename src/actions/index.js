import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_STARTED,
  CLEAR_SEARCH,
  MODIFY_KEYWORD
} from './types'

import { getFlickrEndpoint } from '../utils'

import axios from 'axios'

export const modifyKeyword = keyword => ({
  type: MODIFY_KEYWORD,
  payload: {
    keyword
  }
})

export const fetchImages = (keyword, page) => {
  return dispatch => {
    dispatch(fetchImageStarted())
    axios
      .get(getFlickrEndpoint(keyword, page))
      .then(res => {
        dispatch(fetchImagesSuccess(keyword, res.data, page))
      })
      .catch(err => {
        dispatch(fetchImagesFailure(err.message))
      })
  }
}

const fetchImageStarted = () => ({
  type: FETCH_IMAGES_STARTED
})

const fetchImagesSuccess = (keyword, images, page) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: {
    images,
    keyword,
    page
  }
})

const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: {
    error
  }
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH
})
