import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

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
