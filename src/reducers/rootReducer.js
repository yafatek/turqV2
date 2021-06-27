import { combineReducers } from 'redux'
import auth from './authReducer'
import contest from './contestReducer'
import payments from './paymentsReducer'
import legislation from './legislationReducer'
import postIssue from "./postIssueReducer"

export default combineReducers({
 auth,
 contest,
 payments,
 legislation,
 postIssue
});