import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import productAdminReducer from './productAdminReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  productsAdmin: productAdminReducer,
  products: productsReducer,
});
