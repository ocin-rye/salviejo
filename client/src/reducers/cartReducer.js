import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUBTRACT_QUANTITY } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newCart = state.map((item) => {
        if (item._id === action.payload._id) {
          // item.quantity += 1;
          action.payload.quantity = item.quantity + 1;
          return null;
        }
        return item;
      });
      newCart = newCart.filter(Boolean);
      return [...newCart, action.payload];

    case REMOVE_FROM_CART:
      return state.filter(i => i._id !== action.payload._id);

    case ADD_QUANTITY:
      const cartAddQuantity = state.map((item) => {
        if (item._id === action.payload._id) {
          // item.quantity += 1;
          item.quantity += 1;
          return item;
        }
        return item;
      });
      return [...cartAddQuantity];

    case SUBTRACT_QUANTITY:
      const cartSubtractQuantity = state.map((item) => {
        if (item._id === action.payload._id) {
          if (item.quantity === 1) {
            return item;
          }
          // item.quantity += 1;
          item.quantity -= 1;
          return item;
        }
        return item;
      });
      return [...cartSubtractQuantity];

    default:
      return state;
  }
}

// let newCart = state.map((item) => {
//   if (item._id === action.payload._id) {
//     // item.quantity += 1;
//     return null;
//   }
//   return item;
// });
//
// newCart = newCart.filter(Boolean);
// return [...newCart, action.payload];
