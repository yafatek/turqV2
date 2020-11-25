import {PAYMENT_REQUEST, PAYMENT_SUCCESS, PAYMENT_FAILURE, PAYMENT_RESET} from "../actions/paymentsActions"

export default (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        completed: action.completed,
        isSuccess: action.isSuccess,
      })
    case PAYMENT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isComplete: action.isComplete,
        isSuccess: action.isSuccess,
      })
    case PAYMENT_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isComplete: action.isComplete,
        isSuccess: action.isSuccess,
      })
    case PAYMENT_RESET:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isComplete: action.isComplete,
        isSuccess: action.isSuccess,
      })
    default:
      return state
  }
}