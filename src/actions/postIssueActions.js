import axios from "axios"
import {CONTEST_PAGE_URL} from "../constants"
import { toast } from "react-toastify"
export const POST_ISSUE = "POST_ISSUE"
export const SAVE_HEADLINE = "SAVE_HEADLINE"
export const SAVE_DESCRIPTION = "SAVE_DESCRIPTION"
export const SAVE_LEGISLATION = "SAVE_LEGISLATION"
export const SAVE_LOCATION = "SAVE_LOCATION"
export const SAVE_FUNDING = "SAVE_FUNDING"

export function save_headline(headline) {
    return {
        type:SAVE_HEADLINE,
        headline:headline
    }
}

export function save_description(description) {
    return {
        type:SAVE_DESCRIPTION,
        description:description
    }
}

export function save_legislation(legislation) {
    return {
        type:SAVE_LEGISLATION,
        legislation:legislation
    }
}

export function save_location(location) {
    return {
        type:SAVE_LOCATION,
        location:location
    }
}

export function save_funding(funding) {
    return {
        type:SAVE_FUNDING,
        funding:funding
    }
}
function post_issue(issue){
    return {
        type:POST_ISSUE,
        issue:issue
    }
}
export function postIssue(issue){
    var config = {
        method:"POST",
        url:CONTEST_PAGE_URL,
        data:issue,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }

    return dispatch => {
        dispatch(post_issue(issue))
        return axios(config).then((response) => {
            toast.success(response)
        })
    }
}
