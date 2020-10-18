import axios from "axios"
import { toast } from 'react-toastify';
import { REGISTER_URL } from "../constants"

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

function registerRequest() {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
}

function registerSuccess(token, email) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: token,
    email: email
  }
}

function registerFailure(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function register(creds) {

  let config = {
    method: 'POST',
    url: REGISTER_URL,
    data: {
      email: creds.email,
      password: creds.password
    }
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(registerRequest())

    axios(config)
    .then(res => {
      localStorage.setItem('token', res.data.jwttoken)
      // Dispatch the success action
      dispatch(registerSuccess(res.data.jwttoken, res.data.email))
    }).catch(function (error) {
      dispatch(registerFailure(error))
      toast.error("Registration Failed: " + error.response.data.detail);
    })
  }
}