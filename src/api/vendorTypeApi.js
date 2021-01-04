import { handleResponse, handleError } from './apiUtils';

export function getVendorType() {
  return fetch(`${process.env.REACT_APP_FRONT_END_URL}vendorType/`)
    .then(handleResponse)
    .catch(handleError);
}
