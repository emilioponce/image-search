import { createSelector } from 'reselect'

import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
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
    default:
      return state
  }
}

// Selector
const getSearchResults = state => state.search
// Memoized selector
export const getSearchResultsSelector = createSelector(
  getSearchResults,
  search => {
    return {
      images: search.images,
      keyword: search.keyword,
      page: search.page,
      loading: search.loading
    }
  }
)

export default imagesReducer
