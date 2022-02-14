import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import jwt_decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({});
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
      fetchEmail: () => {
        const token = localStorage.getItem('token')
        if(token){
          const decoded = jwt_decode(token)
          return decoded? decoded.sub : ""
        }
        return ""
      }
    }
  },
  composeEnhancers(applyMiddleware(thunk))
 );
}