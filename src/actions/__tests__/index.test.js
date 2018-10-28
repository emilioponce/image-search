import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from '../types'

import { fetchImages } from '../index'

describe('Action creators', () => {
  it('should create fetch images started action ', async () => {
    const keyword = 'pubs'
    const expected = {
      type: FETCH_IMAGES_STARTED
    }

    // mocking dispatch function from Redux thunk
    const dispatch = jest.fn()

    // execution with dispatch
    await fetchImages(keyword)(dispatch)

    // checking action constants are equal
    expect(dispatch.mock.calls[0][0]).toEqual(expected)
  })
})
