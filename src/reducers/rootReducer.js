import {combineReducers} from 'redux'
import auth from './authReducer'
import contest from './contestReducer'
import payments from './paymentsReducer'
import legislation from './legislationReducer'
import postIssue from "./postIssueReducer"
import {userReducer} from "../redux/reducers/UserReducer";
import {AppReducer} from "../redux/reducers/AppReducer";

export default combineReducers({
    auth,
    contest,
    payments,
    legislation,
    postIssue,
    user: userReducer,
    app: AppReducer
});