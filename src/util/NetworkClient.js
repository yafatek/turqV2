import axios from "axios";
import {BASE_URL} from "../constants";

export const fetchApiData = (token, refreshToken, path, dispatchType) => dispatch => {
    axios.request({
        method: 'GET',
        url: BASE_URL + path,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        data: {
            dummy: 'dummy body used with get request -__-'
        },

    }).then(response => {
        if (response.data) {
            // we have a valid response.
            dispatch({
                type: dispatchType.SUCCESS,
                apiMessage: response.data.message,
                payload: response.data
            })
        } else {
            // false status code.
            dispatch({
                type: dispatchType.FAIL,
                apiMessage: response.data.errors.errorMessage
            });
        }
    })
        .catch(error => {
            if (error.response) {
                let code = error.response.status;
                if (code === 401) {
                    ///todo revoke user access, or refresh the user token.
                    //  axios interceptors can be used here to refresh, retry the request.
                    // revokeExpiredToken(code, dispatch);
                }
            }
        });

};
