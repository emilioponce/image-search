import { createSelector } from 'reselect'

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
// Memoized selector
export const getTotalAmountOfResultsSelector = createSelector(
  getTotalAmountOfResults,
  images => images.total
)
