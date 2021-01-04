import * as types from './actionTypes';
import * as userApi from '../../api/userApi';

export function loadUserSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

export function loadUsers() {
  return function(dispatch) {
    return userApi
      .getUsers()
      .then(user => {
        dispatch(loadUserSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateUsers(user) {
  return function(dispatch) {
    return userApi
      .updateUser(user)
      .then(user => {
        dispatch(updateUserSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
