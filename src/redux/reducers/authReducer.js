import {ADD_TOKEN, FACEBOOK_SIGN_IN, GET_TOKEN} from '../constants';
import {REMOVE_TOKEN, GOOGLE_SIGN_IN, SIMPLE_SIGN_IN} from '../constants/index';

const initialState = {
  emailToken: null,
  googleSignIn: null,
  facebookSignIn: null,
  simpleSignIn: null,
  userInfo: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        emailToken: action.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        emailToken: null,
      };
    case GET_TOKEN:
      return {
        ...state,
        emailToken: state.token,
      };
    case GOOGLE_SIGN_IN:
      return {
        ...state,
        googleSignIn: action.payload,
      };
    case FACEBOOK_SIGN_IN:
      return {
        ...state,
        facebookSignIn: action.payload,
      };
    case SIMPLE_SIGN_IN:
      return {
        ...state,
        simpleSignIn: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
