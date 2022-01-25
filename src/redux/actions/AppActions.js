import {CHANGE_IS_FOR_DRAFT} from "../reducers/AppReducer";

export const changeIsDrafted = (status) => dispatch => {
    dispatch({
        type: CHANGE_IS_FOR_DRAFT,
        payload: status
    });
};