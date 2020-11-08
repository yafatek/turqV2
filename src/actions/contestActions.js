import axios from "axios"
import { toast } from 'react-toastify';
import { CONTEST_DATA_URL, TOKEN_ERROR_CODE } from "../constants"
import { logout } from './logout'

// Fetch individual Contest

export const FETCH_CONTEST_REQUEST = 'FETCH_CONTEST_REQUEST'
export const FETCH_CONTEST_SUCCESS = 'FETCH_CONTEST_SUCCESS'
export const FETCH_CONTEST_FAILURE = 'FETCH_CONTEST_FAILURE'

function fetchContestRequest() {
  return {
    type: FETCH_CONTEST_REQUEST,
    isFetching: true,
  }
}

function fetchContestSuccess(contest) {
  return {
    type: FETCH_CONTEST_SUCCESS,
    isFetching: false,
    contest: contest
  }
}

function fetchContestFailure(error) {
  return {
    type: FETCH_CONTEST_FAILURE,
    isFetching: false,
    error
  }
}

export function fetchContest(contestId) {

  var config = {
    method: 'GET',
    url: `${CONTEST_DATA_URL}/${contestId}`
  }

  return dispatch => {
    dispatch(fetchContestRequest())
    return axios(config)
    .then(res => {
      dispatch(fetchContestSuccess(res.data))
    }).catch(function (error) {
      dispatch(fetchContestFailure(error))
      toast.error("Unable load contest, please try again in a few minutes")
    })
  }
}

// Fetch All Contest

export const FETCH_ALL_CONTESTS_REQUEST = 'FETCH_ALL_CONTESTS_REQUEST'
export const FETCH_ALL_CONTESTS_SUCCESS = 'FETCH_ALL_CONTESTS_SUCCESS'
export const FETCH_ALL_CONTESTS_FAILURE = 'FETCH_ALL_CONTESTS_FAILURE'

function fetchAllContestsRequest() {
  return {
    type: FETCH_ALL_CONTESTS_REQUEST,
    isFetching: true,
  }
}

function fetchAllContestsSuccess(contests) {
  return {
    type: FETCH_ALL_CONTESTS_SUCCESS,
    isFetching: false,
    contests: contests
  }
}

function fetchAllContestsFailure(error) {
  return {
    type: FETCH_ALL_CONTESTS_FAILURE,
    isFetching: false,
    error
  }
}

export function fetchAllContests() {

  var config = {
    method: 'GET',
    url: CONTEST_DATA_URL,
  }

  return dispatch => {

    dispatch(fetchAllContestsRequest())
    return axios(config)
    .then(res => {
      dispatch(fetchAllContestsSuccess(res.data))
    }).catch(function (error) {
      dispatch(fetchAllContestsFailure(error))
      toast.error("Unable load contest, please try again in a few minutes: " + error)
    })
  }
}

// Update a contest

export const UPDATE_CONTEST_REQUEST = 'UPDATE_CONTEST_REQUEST'
export const UPDATE_CONTEST_SUCCESS = 'UPDATE_CONTEST_SUCCESS'
export const UPDATE_CONTEST_FAILURE = 'UPDATE_CONTEST_FAILURE'

function updateContestRequest() {
  return {
    type: UPDATE_CONTEST_REQUEST,
    isFetching: true,
  }
}

function updateContestSuccess() {
  return {
    type: UPDATE_CONTEST_SUCCESS,
    isFetching: false,
  }
}

function updateContestFailure(error) {
  return {
    type: UPDATE_CONTEST_FAILURE,
    isFetching: false,
    error
  }
}

export function updateContest(contestId, contest, token) {

  var config = {
    method: (contestId !== undefined ? 'PUT' : 'POST'),
    url: CONTEST_DATA_URL + (contestId !== undefined ? `/${contestId}` : ""),
    data: contest,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  }

  return dispatch => {
    dispatch(updateContestRequest())
    return axios(config)
    .then(res => {
      dispatch(updateContestSuccess())
      localStorage.removeItem('unsaved_contest')
      toast.success("Contest Saved");
    }).catch(function (error) {
      dispatch(updateContestFailure(error))
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("You must log in to make changes to a contest");
        } else if (error.response.status === 402) {
          toast.error("You are not authorized to edit this contest");
        } else if (error.response.status === TOKEN_ERROR_CODE) {
          dispatch(logout())
        }
      } else {
          toast.error("Failed to update contest");
      }
    })
  }
}