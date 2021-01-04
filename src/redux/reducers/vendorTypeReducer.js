import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function vendorTypeReducer(
  state = initialState.vendors,
  action
) {
  switch (action.type) {
    case types.LOAD_VENDOR_TYPE_SUCCESS:
      return action.vendors;
    default:
      return state;
  }
}
