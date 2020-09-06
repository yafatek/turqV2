import {FETCH_CONTEST_REQUEST, FETCH_CONTEST_SUCCESS, FETCH_CONTEST_FAILURE} from "../actions/contestActions"
import {FETCH_ALL_CONTESTS_REQUEST, FETCH_ALL_CONTESTS_SUCCESS, FETCH_ALL_CONTESTS_FAILURE} from "../actions/contestActions"

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTEST_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })
    case FETCH_CONTEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        contest: action.contest
      })
    case FETCH_CONTEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      })
    case FETCH_ALL_CONTESTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })
    case FETCH_ALL_CONTESTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        allContests: action.contests
      })
    case FETCH_ALL_CONTESTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      })
    default:
      return state
  }
}