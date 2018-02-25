import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newCart = state.map((x) => {
        if (x._id === action.payload._id) {
          return null;
        }
        return x;
      });

      newCart = newCart.filter(Boolean);
      return [...newCart, action.payload];

    // return newCart;
    case REMOVE_FROM_CART:
      return state.filter(i => i._id !== action.payload._id);
    default:
      return state;
  }
}

// return [...state, action.payload];
