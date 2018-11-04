import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_STARTED
} from './types'

import {
  FLICKR_API,
  FLICKR_METHOD,
  FLICKR_API_KEY,
  FLICKR_FORMAT,
  FLICKR_NO_JSON_CALLBACK,
  FLICKR_EXTRAS,
  FLICKR_PER_PAGE
} from '../config/constants'

import axios from 'axios'

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

const getFlickrEndpoint = (keyword, page) => {
  return `${FLICKR_API}?method=${FLICKR_METHOD}&
api_key=${FLICKR_API_KEY}&
text=${keyword}&
format=${FLICKR_FORMAT}&
nojsoncallback=${FLICKR_NO_JSON_CALLBACK}&
extras=url_q&
per_page=${FLICKR_PER_PAGE}&
page=${page}&
extras=${FLICKR_EXTRAS}`
}
