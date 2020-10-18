import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
 return createStore(
  rootReducer,
  {
    auth: {
      token: localStorage.getItem('token'),
      isAuthenticated: localStorage.getItem('token') ? true : false,
      email: undefined
    }
  },
  applyMiddleware(thunk)
 );
}