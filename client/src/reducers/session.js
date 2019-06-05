import {types} from '../actions/session';

const initialState = null;

const sessionReducer = (state= initialState, action) => {
  switch(action.type) {
    case `${types.SIGNUP}_SUCCESS`:
        return action.data;
  
    case `${types.LOGIN}_SUCCESS`:
      return action.data;

    case `${types.SETUSER}`:
      return action.data;

    case types.LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default sessionReducer;