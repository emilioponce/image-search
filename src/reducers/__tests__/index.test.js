import imagesReducer from '../search'
import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  CLEAR_SEARCH,
  MODIFY_KEYWORD
} from '../../actions/types'

const initialState = {
  loading: false,
  images: {},
  keyword: '',
  page: 1,
  error: null
}

describe('ImagesReducer reducer', () => {
  it('should return the initial state', () => {
    expect(imagesReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_IMAGES_STARTED', () => {
    const state = {}
    const expectedNewState = {
      ...state,
      loading: true
    }
    expect(imagesReducer(state, { type: FETCH_IMAGES_STARTED })).toEqual(
      expectedNewState
    )
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    const state = {}
    const images = {}
    const keyword = 'dog'
    const page = 1

    const action = {
      type: FETCH_IMAGES_SUCCESS,
      payload: {
        images,
        keyword,
        page
      }
    }

    const expectedNewState = {
      ...state,
      loading: false,
      images: action.payload.images.photos,
      keyword: action.payload.keyword,
      page: action.payload.page,
      error: null
    }

    expect(imagesReducer(state, action)).toEqual(expectedNewState)
  })

  it('should handle FETCH_IMAGES_FAILURE', () => {
    const state = {}
    const error = ''

    const action = {
      type: FETCH_IMAGES_FAILURE,
      payload: {
        error
      }
    }

    const expectedNewState = {
      ...state,
      loading: false,
      error: action.payload.error
    }
    expect(imagesReducer(state, action)).toEqual(expectedNewState)
  })

  it('should handle CLEAR_SEARCH', () => {
    const state = {}

    const action = {
      type: CLEAR_SEARCH
    }

    const expectedNewState = {
      ...initialState
    }
    expect(imagesReducer(state, action)).toEqual(expectedNewState)
  })

  it('should handle MODIFY_KEYWORD', () => {
    const state = {}
    const keyword = 'dog'

    const action = {
      type: MODIFY_KEYWORD,
      payload: {
        keyword
      }
    }

    const expectedNewState = {
      ...state,
      keyword: action.payload.keyword
    }
    expect(imagesReducer(state, action)).toEqual(expectedNewState)
  })
})
