import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;

    case types.UPDATE_USER_SUCCESS:
      return state.map(user => {
        return user.id === action.user.id ? action.user : user;
      });
    default:
      return state;
  }
}
