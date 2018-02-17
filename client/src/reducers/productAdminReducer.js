import { SUBMIT_PRODUCT } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SUBMIT_PRODUCT:
      return action.payload || false;
    default:
      return state;
  }
}
