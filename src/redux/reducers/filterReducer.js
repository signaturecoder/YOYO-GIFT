import * as types from '../actions/actionTypes';
const initialState = { category: '', price: '', discount: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_BY_CATEGORY:
      return { ...state, category: action.payload };
    case types.FILTER_BY_PRICE:
      return { ...state, price: action.payload };
    case types.FILTER_BY_DISCOUNT:
      return { ...state, discount: action.payload };
    default:
      return state;
  }
};
