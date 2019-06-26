import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import apiFetch from './apiFetch';
import rootReducer from '../reducers'


const middleware = [thunk, apiFetch];

if(process.env !== 'production') {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(['user','comments','movies','favorites'])
)

const store = createStore(rootReducer, enhancer);

export default store;
