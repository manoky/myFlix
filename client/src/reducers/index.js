import {combineReducers} from 'redux';
import moviesReducer from './fetchMovies';
import favoriteReducer from './favorite';
import sessionReducer from './session';

export default combineReducers({
  movies: moviesReducer,
  favorites: favoriteReducer,
  user: sessionReducer,
});