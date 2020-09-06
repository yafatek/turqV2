import { combineReducers } from 'redux'
import auth from './authReducer'
import contest from './contestReducer'
import legislation from './legislationReducer'
export default combineReducers({
 auth,
 contest,
 legislation
});