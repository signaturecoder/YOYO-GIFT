import { handleResponse, handleError } from './apiUtils';

export function getUsers() {
  return fetch(`${process.env.REACT_APP_FRONT_END_URL}users/`)
    .then(handleResponse)
    .catch(handleError);
}

export function updateUser(user) {
  return fetch(`${process.env.REACT_APP_FRONT_END_URL}users/${user.id || ''}`, {
    // method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}
