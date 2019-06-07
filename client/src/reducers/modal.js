import {types} from '../actions/modal';

const initialState = false;

const modalReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.SHOWMODAL:
      return true;
    case types.HIDEMODAL:
      return initialState;
    default:
      return state;
  }

}

export default modalReducer;