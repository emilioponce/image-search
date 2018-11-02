import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_STARTED
} from './types'

import { FLICKR_API_KEY } from '../config/constants'

import axios from 'axios'

export const fetchImages = (keyword, page) => {
  let FLICKR_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&
api_key=${FLICKR_API_KEY}&
text=${keyword}&
format=json&
nojsoncallback=1&
extras=url_q&
page=${page}`

  return dispatch => {
    dispatch(fetchImageStarted())
    axios
      .get(FLICKR_ENDPOINT)
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
