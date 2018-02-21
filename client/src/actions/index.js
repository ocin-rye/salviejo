import axios from 'axios';
import { FETCH_USER, SUBMIT_PRODUCT, FETCH_PRODUCTS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginSubmit = values => async (dispatch) => {
  console.log('value', values);

  const res = await axios.post('/api/login', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signUpSubmit = values => async (dispatch) => {
  console.log('value', values);

  const res = await axios.post('/api/signup', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const productSubmit = values => async (dispatch) => {
  console.log('value', values);

  const res = await axios.post('/api/products', values);

  dispatch({ type: SUBMIT_PRODUCT, payload: res.data });
};

export const fetchProducts = values => async (dispatch) => {
  console.log('This is the fetched products values:', values);
  const res = await axios.get('/api/products', values);

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
