import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  EMPTY_CART,
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newCart = state.map(item => {
        if (item._id === action.payload._id) {
          // item.quantity += 1;
          if (item.style === action.payload.style) {
            action.payload.quantity = item.quantity + 1;
            return null;
          }
          return item;
        }
        return item;
      });
      newCart = newCart.filter(Boolean);
      return [...newCart, action.payload];

    case REMOVE_FROM_CART:
      return state.filter(
        i => {
          if (i._id === action.payload._id) {
            if (i.style === action.payload.style) {
              return false;
            }
            return true;
          }
          return true;
        },
        // i => i._id !== action.payload._id && i.style !== action.payload.style,
      );

    case ADD_QUANTITY:
      const cartAddQuantity = state.map(item => {
        if (item._id === action.payload._id) {
          // item.quantity += 1;
          if (item.style === action.payload.style) {
            item.quantity += 1;
            return item;
          }
        }
        return item;
      });
      return [...cartAddQuantity];

    case SUBTRACT_QUANTITY:
      const cartSubtractQuantity = state.map(item => {
        if (item._id === action.payload._id) {
          if (item.quantity === 1) {
            return item;
          }
          // item.quantity += 1;
          if (item.style === action.payload.style) {
            item.quantity -= 1;
            return item;
          }
        }
        return item;
      });
      return [...cartSubtractQuantity];

    case EMPTY_CART:
      return [];

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
