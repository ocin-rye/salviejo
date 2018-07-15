import _ from 'lodash';
import { CALCULATE_CHECKOUT } from '../actions/types';

export default function(
  state = {
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  },
  action,
) {
  switch (action.type) {
    case CALCULATE_CHECKOUT:
      let subtotal = [];
      let tax = [];
      const shipping = 20;

      action.payload.map(cartItem =>
        subtotal.push(cartItem.price * cartItem.quantity),
      );

      action.payload.map(cartItem => tax.push('0.30' * cartItem.quantity));

      subtotal = _.sum(subtotal);
      tax = _.sum(tax);

      const total = subtotal + tax + shipping;

      return {
        subtotal: subtotal.toFixed(2).toString(),
        tax: tax.toFixed(2).toString(),
        shipping: shipping.toFixed(2).toString(),
        total: total.toFixed(2).toString(),
      };
    default:
      return state;
  }
}
