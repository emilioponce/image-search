import { createSelector } from 'reselect'

import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CLEAR_SEARCH,
  MODIFY_KEYWORD
} from '../actions/types'

const initialState = {
  loading: false,
  images: {},
  keyword: '',
  page: 1,
  error: null
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_STARTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload.images.photos,
        keyword: action.payload.keyword,
        page: action.payload.page,
        error: null
      }
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case CLEAR_SEARCH:
      return {
        ...initialState
      }
    case MODIFY_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword
      }
    default:
      return state
  }
}

export default imagesReducer
