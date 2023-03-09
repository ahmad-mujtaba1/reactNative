import {ADD_TOKEN, REMOVE_TOKEN, GET_TOKEN} from '../constants';

export const storeToken = token => {
  return {
    type: ADD_TOKEN,
    token,
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
