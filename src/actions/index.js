import axios from 'axios'

/*
* ACTIONS
*/
export const FETCH_IMAGES = 'FETCH_IMAGES'

/*
 * ACTION CREATORS
 */
export const fetchImages = npag => {
  const URL = 'https://blablabla/' + npag
  console.log('URL', URL)
  return dispatch => {
    return axios.get(URL).then(
      response => {
        dispatch({
          type: FETCH_IMAGES,
          payload: response
        })
      },
      error => {
        throw error
      }
    )
  }
}
