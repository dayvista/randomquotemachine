import {
  GET_QUOTE,
  CLEAR_QUOTE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload
      };
    case CLEAR_QUOTE:
      return {
        ...state,
        quote: ''
      };
    default:
      return state;
  }
}