export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    email: null
  }
}

export function logout() {

  localStorage.clear()

  return dispatch => {
    dispatch(logoutSuccess())
  }
}