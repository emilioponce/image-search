import {
  FLICKR_API,
  FLICKR_METHOD,
  FLICKR_API_KEY,
  FLICKR_FORMAT,
  FLICKR_NO_JSON_CALLBACK,
  FLICKR_EXTRAS,
  FLICKR_PER_PAGE
} from '../config/constants'

export const getFlickrEndpoint = (keyword, page) => {
  return `${FLICKR_API}?method=${FLICKR_METHOD}&
  api_key=${FLICKR_API_KEY}&
  text=${keyword}&
  format=${FLICKR_FORMAT}&
  nojsoncallback=${FLICKR_NO_JSON_CALLBACK}&
  per_page=${FLICKR_PER_PAGE}&
  page=${page}&
  extras=${FLICKR_EXTRAS}`
}
