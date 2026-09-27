import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

// Create an instance of axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

/*
  NOTE: intercept any request and attach the auth token from localStorage
  if it exists so that authenticated endpoints receive x-auth-token.
*/
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;

