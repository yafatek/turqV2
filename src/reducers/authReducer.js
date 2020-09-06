import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/login"
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "../actions/register"
import {LOGOUT_SUCCESS} from "../actions/logout"

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        email: action.email
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.error
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        email: action.email
      })
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        email: action.email
      })
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.error
      })
    default:
      return state
  }
}