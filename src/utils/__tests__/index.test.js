import { getFlickrEndpoint } from '../index'

const expectedUrl = `https://api.flickr.com/services/rest?method=flickr.photos.search&
  api_key=9b59ed7d0dd204ba3c9f0f210fa559d6&
  text=cats&
  format=json&
  nojsoncallback=1&
  per_page=50&
  page=1&
  extras=url_q,url_m,description,owner_name,date_upload`

describe('Utils file', () => {
  it('Should return a Flickr URL', () => {
    const url = getFlickrEndpoint('cats', 1)
    expect(url).toBe(expectedUrl)
  })
})
