import * as types from './actionTypes';

export const getCategoryFilter = categoryFilter => dispatch => {
  dispatch({ type: types.FILTER_BY_CATEGORY, payload: categoryFilter });
};

export const getPriceFilter = price => dispatch => {
  dispatch({ type: types.FILTER_BY_PRICE, payload: price });
};

export const getDiscountFilter = discount => dispatch => {
  dispatch({ type: types.FILTER_BY_DISCOUNT, payload: discount });
};
