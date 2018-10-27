import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from '../actions/types'

const initialState = {
  loading: false,
  images: [],
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
        error: null,
        images: [...state.images, action.payload]
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

export default imagesReducer
