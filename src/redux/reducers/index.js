import { combineReducers } from 'redux';
import vendors from './vendorTypeReducer';
import users from './userReducer';
import filter from './filterReducer';
const rootReducer = combineReducers({
  vendors,
  users,
  filter,
});

export default rootReducer;
