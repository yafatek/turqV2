import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import jwt_decode from 'jwt-decode';

export default function configureStore() {
 return createStore(
  rootReducer,
  {
    auth: {
      token: localStorage.getItem('token'),
      isAuthenticated: localStorage.getItem('token') ? true : false,
      isAdmin: () => {
        const token = localStorage.getItem('token')
        if (token) {
          const decoded = jwt_decode(token)
          return decoded ? decoded.admin : false
        }
        return false
      },
      email: undefined
    }
  },
  applyMiddleware(thunk)
 );
}