import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CLEAR_SEARCH,
  MODIFY_KEYWORD
} from '../types'
import { fetchImages, modifyKeyword, clearSearch } from '../index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action creators', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('should create the FETCH_IMAGES_SUCCESS action after successfully fetching images', async () => {
    const keyword = 'cats'
    const page = 1

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { photos: {} }
      })
    })

    const expectedActions = [
      { type: FETCH_IMAGES_STARTED },
      {
        type: FETCH_IMAGES_SUCCESS,
        payload: { images: { photos: {} }, keyword: 'cats', page: 1 }
      }
    ]

    const store = mockStore({ photos: {} })
    await store.dispatch(fetchImages(keyword, page))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should create the FETCH_IMAGES_FAILURE action after failed fetching images', async () => {
    const keyword = 'cats'
    const page = 1

    // adding this status 404 we are forcing moxios to fail
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 404,
        response: { photos: {} }
      })
    })

    const expectedActions = [
      { type: FETCH_IMAGES_STARTED },
      {
        type: FETCH_IMAGES_FAILURE,
        payload: { error: 'Request failed with status code 404' }
      }
    ]

    const store = mockStore({ photos: {} })
    await store.dispatch(fetchImages(keyword, page))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should create a MODIFY_KEYWORD action to modify the keyword', () => {
    const keyword = 'cats'
    const expectedAction = {
      type: MODIFY_KEYWORD,
      payload: {
        keyword
      }
    }
    expect(modifyKeyword(keyword)).toEqual(expectedAction)
  })

  it('should create a CLEAN_SEARCH action to clean the previous search results', () => {
    const expectedAction = {
      type: CLEAR_SEARCH
    }
    expect(clearSearch()).toEqual(expectedAction)
  })
})
