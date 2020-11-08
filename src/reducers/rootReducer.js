import { combineReducers } from 'redux'
import auth from './authReducer'
import contest from './contestReducer'
import payments from './paymentsReducer'
import legislation from './legislationReducer'
export default combineReducers({
 auth,
 contest,
 payments,
 legislation
});