import {combineReducers} from 'redux';
import moviesReducer from './fetchMovies';
import favoriteReducer from './favorite';
import sessionReducer from './session';
import modalReducer from './modal';
import ratingReducer from './comments';

export default combineReducers({
  movies: moviesReducer,
  favorites: favoriteReducer,
  user: sessionReducer,
  modal: modalReducer,
  comments: ratingReducer,
});