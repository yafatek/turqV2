export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess() {
    console.log('logout 3')
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    email: null
  }
}

export function logout() {
  localStorage.removeItem("token")
  return dispatch => {
    console.log('logout 2');
    dispatch(logoutSuccess())
  }
}