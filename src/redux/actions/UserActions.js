import {LOAD_USER_PROFILE_ERROR, LOAD_USER_PROFILE_FAIL, LOAD_USER_PROFILE_SUCCESS} from "../reducers/UserReducer";
import {fetchApiData} from "../../util/NetworkClient";

export const loadUserProfile = (token) => dispatch => {
    dispatch(fetchApiData(token, '', '/users/activity', {
        SUCCESS: LOAD_USER_PROFILE_SUCCESS,
        FAIL: LOAD_USER_PROFILE_FAIL,
        ERROR: LOAD_USER_PROFILE_ERROR
    }));
};