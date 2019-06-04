import {types} from '../actions/fetchMovies';

const initialState = [];


const moviesReducer = (state= initialState, action) => {
  switch(action.type) {
    case `${types.FETCH_MOVIES}_SUCCESS`:
      return action.data;

    default:
    return state
  }
}

export default moviesReducer;