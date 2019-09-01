import {
  getSearchResultsSelector,
  getTotalAmountOfResultsSelector
} from '../selectors'

describe('Selectors', () => {
  it('Search results selector', () => {
    const searchData = {
      images: {},
      keyword: 'cat',
      page: 1,
      loading: false,
      error: null
    }
    const expectedResult = {
      images: {},
      keyword: 'cat',
      page: 1,
      loading: false
    }

    // resultFunc is a way to access the second parameter of the createSelector() function, to pass the searchData
    const selectedData = getSearchResultsSelector.resultFunc(searchData)
    expect(selectedData).toEqual(expectedResult)
  })

  it('Total amount of results selector', () => {
    const searchData = {
      page: 1,
      pages: 1,
      perpage: 50,
      photo: [
        {
          id: '1',
          owner: 'a',
          title: 'image1',
          url_m: 'https//www.image1.com'
        },
        {
          id: '2',
          owner: 'b',
          title: 'image2',
          url_m: 'https//www.image2.com'
        },
        {
          id: '3',
          owner: 'c',
          title: 'image3',
          url_m: 'https//www.image3.com'
        }
      ],
      total: 3
    }
    const expectedResult = searchData.total
    const selectedData = getTotalAmountOfResultsSelector.resultFunc(searchData)
    expect(selectedData).toEqual(expectedResult)
  })
})
