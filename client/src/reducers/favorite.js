import {types} from '../actions/favorite';
import {unfavorite} from '../actions/favorite';

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  switch(action.type) {
    case `${types.GETFAVORITES}_SUCCESS`:
      return action.data;

    case `${types.FAVORITE}_SUCCESS`:
      return action.data;

    case `${types.UNFAVORITE}_SUCCESS`:
      return action.data
    default:
      return state;
  }
}

export default favoriteReducer;