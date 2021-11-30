import axios from "axios";
import {fetchApiData} from "../../util/NetworkClient";
import {LOAD_USER_PROFILE_ERROR, LOAD_USER_PROFILE_FAIL, LOAD_USER_PROFILE_SUCCESS} from "../models/UserReducer";

export const loadUserProfile = (token, email) => dispatch => {
    dispatch(fetchApiData(token, '', '/users/'+email+'/activity', {
        SUCCESS: LOAD_USER_PROFILE_SUCCESS,
        FAIL: LOAD_USER_PROFILE_FAIL,
        ERROR: LOAD_USER_PROFILE_ERROR
    }));
}