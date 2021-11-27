import {fromJS} from "immutable";

const initState = {
    apiSuccess: '',
    apiError: '',
    apiWarning: '',
    userInfo: ''
};

const immutableState = fromJS(initState);

export const userReducer = (state = immutableState, action) => {
    switch (action.type) {
        case LOAD_USER_PROFILE_SUCCESS:
            return state.withMutations(mState => {
                mState.set('userInfo', action.payload);
                mState.set('apiSuccess', action.apiMessage);
                mState.set('apiError', '');
            });
        case LOAD_USER_PROFILE_FAIL:
            return state.withMutations(mState => {
                mState.set('apiWarning', action.apiMessage);
            });
        case LOAD_USER_PROFILE_ERROR:
            return state.withMutations(mState => {
                mState.set('apiError', action.apiMessage);
            });
        default:
            return state;
    }
};

export const LOAD_USER_PROFILE_SUCCESS = "LOAD_USER_PROFILE_SUCCESS";
export const LOAD_USER_PROFILE_FAIL = "LOAD_USER_PROFILE_FAIL";
export const LOAD_USER_PROFILE_ERROR = "LOAD_USER_PROFILE_ERROR";

