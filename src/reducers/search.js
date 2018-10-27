import { FETCH_IMAGES } from '../actions'

const fetchImages = (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return action.payload.data
    default:
      return state
  }
}

export default fetchImages
