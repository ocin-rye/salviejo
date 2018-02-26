import { FETCH_PRODUCTS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      if (action.payload.length === 0) {
        console.log(action.payload);
        action.payload = null;
      }
      return action.payload || false;
    default:
      return state;
  }
}
