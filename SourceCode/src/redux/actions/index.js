import * as loginAction from './LoginAction/loginAction';
import * as homeAction from './HomeAction/homeAction';
import * as notificationAction from './NotificationAction/notificationAction';

export const ActionCreators = Object.assign(
  {},
  loginAction,
  homeAction,
  notificationAction,
);
