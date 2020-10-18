import {
  FETCH_LEGISLATION_REQUEST,
  FETCH_LEGISLATION_SUCCESS,
  FETCH_LEGISLATION_FAILURE,
  FETCH_ALL_LEGISLATIONS_REQUEST,
  FETCH_ALL_LEGISLATIONS_SUCCESS,
  FETCH_ALL_LEGISLATIONS_FAILURE } from "../actions/legislationActions"

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LEGISLATION_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })
    case FETCH_LEGISLATION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        legislation: action.legislation
      })
    case FETCH_LEGISLATION_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      })
    case FETCH_ALL_LEGISLATIONS_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })
    case FETCH_ALL_LEGISLATIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        allLegislation: action.legislations
      })
    case FETCH_ALL_LEGISLATIONS_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      })
    default:
      return state
  }
}