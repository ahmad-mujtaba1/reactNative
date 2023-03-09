import {
  ADD_TOKEN,
  REMOVE_TOKEN,
  GET_TOKEN,
  FACEBOOK_SIGN_IN,
} from '../constants';
import {GOOGLE_SIGN_IN, SIMPLE_SIGN_IN} from '../constants/index';

export const storeToken = token => {
  return {
    type: ADD_TOKEN,
    token,
  };
};
export const googleSignIn = payload => {
  return {
    type: GOOGLE_SIGN_IN,
    payload,
  };
};
export const FacebookSignIn = payload => {
  return {
    type: FACEBOOK_SIGN_IN,
    payload,
  };
};
export const SimpleSignIn = payload => {
  return {
    type: SIMPLE_SIGN_IN,
    payload,
  };
};
export const removeToken = token => {
  return {
    type: REMOVE_TOKEN,
  };
};
export const getToken = token => {
  return {
    type: GET_TOKEN,
  };
};
