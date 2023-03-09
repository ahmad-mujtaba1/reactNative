import {ADD_TOKEN, GET_TOKEN} from '../constants';
import {REMOVE_TOKEN} from '../constants/index';

const initialState = {
  token: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        token: null,
      };
    case GET_TOKEN:
      return {
        token: state.token,
      };
    default:
      return state;
  }
};
export default authReducer;
