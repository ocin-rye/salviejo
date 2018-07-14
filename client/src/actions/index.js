import axios from 'axios';
import {
  FETCH_USER,
  SUBMIT_PRODUCT,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  EMPTY_CART,
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginSubmit = values => async dispatch => {
  // console.log('value', values);

  const res = await axios.post('/api/login', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signUpSubmit = values => async dispatch => {
  // console.log('value', values);

  const res = await axios.post('/api/signup', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const productSubmit = values => async dispatch => {
  // console.log('value', values);

  const res = await axios.post('/api/products', values);

  dispatch({ type: SUBMIT_PRODUCT, payload: res.data });
};

export const fetchProducts = values => async dispatch => {
  // console.log('This is the fetched products values:', values);

  const res = await axios.get('/api/products', {
    params: { type: values },
  });

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProductItem = values => async dispatch => {
  // console.log('This is the fetched product item values:', values);
  const res = await axios.get('/api/product_item', { params: values });

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const addToCart = values => dispatch => {
  const res = values;

  dispatch({ type: ADD_TO_CART, payload: res });
};

export const removeFromCart = values => dispatch => {
  const res = values;

  dispatch({ type: REMOVE_FROM_CART, payload: res });
};

export const addQuantityCart = values => dispatch => {
  const res = values;

  dispatch({ type: ADD_QUANTITY, payload: res });
};

export const subtractQuantityCart = values => dispatch => {
  const res = values;

  dispatch({ type: SUBTRACT_QUANTITY, payload: res });
};

export const emptyCart = values => dispatch => {
  const res = 'empty';

  dispatch({ type: EMPTY_CART, payload: res });
};
