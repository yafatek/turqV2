const initState = {
    isForDraft: false
}
export const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_IS_FOR_DRAFT:
            return {
                ...state, isForDraft: action.payload
            }
        default:
            return state;
    }
};
export const CHANGE_IS_FOR_DRAFT = "CHANGE_IS_FOR_DRAFT";