import * as types from './actionTypes';
import * as vendorTypeApi from '../../api/vendorTypeApi';

export function loadVendorTypeSuccess(vendors) {
  return { type: types.LOAD_VENDOR_TYPE_SUCCESS, vendors };
}

// thunk to handle api

export function loadVendors() {
  return function(dispatch) {
    return vendorTypeApi
      .getVendorType()
      .then(vendor => {
        dispatch(loadVendorTypeSuccess(vendor));
      })
      .catch(error => {
        throw error;
      });
  };
}
