import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import productAdminReducer from './productAdminReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  form: reduxForm,
  productsAdmin: productAdminReducer,
  products: productsReducer,
});
