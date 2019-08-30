import { createSelector } from 'reselect'

import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CLEAR_SEARCH
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
    default:
      return state
  }
}

// Selector search results
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
// Selector total amount of results
const getTotalAmountOfResults = state => state.search.images
export const getTotalAmountOfResultsSelector = createSelector(
  getTotalAmountOfResults,
  images => images.total
)

export default imagesReducer
