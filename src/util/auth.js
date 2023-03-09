import axios from 'axios';
import {API_KEY} from '../redux/constants';

export const signup = (email, password) => {
  const url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs7IXTApgJttIuFffLqKA9X_-NrPn59vk';
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const login = (email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};
