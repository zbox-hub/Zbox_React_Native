//Class responsible for combining all the reducers
import {combineReducers} from 'redux';
import * as loginReducer from './LoginReducer/loginReducer';
import * as homeReducer from './HomeReducer/homeReducer';
import * as notificationReducer from './NotificationReducer/notificationReducer';

const appReducer = combineReducers(
  Object.assign({}, loginReducer, homeReducer, notificationReducer),
);

export default appReducer;
