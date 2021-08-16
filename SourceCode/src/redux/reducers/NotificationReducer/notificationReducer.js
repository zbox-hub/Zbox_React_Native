import createReducer from "../createReducer";
import * as constants from "../../actions/NotificationAction/constants";

const intialState = {
  isLoading: false,
  notificationsData: null,
  error: null,
};
export const notificationReducer = createReducer(intialState, {
  [constants.START_REQUEST](state) {
    return Object.assign({}, state, {
      isLoading: true,
    });
  },
  [constants.END_REQUEST](state, action) {
    return Object.assign({}, state, {
      isLoading: false,
    });
  },
  [constants.RESP_ERROR](state, action) {
    return Object.assign({}, state, {
      error: action.error,
    });
  },
  [constants.GET_NOTIFICATIONS](state, action) {
    return Object.assign({}, state, {
      notificationsData: action.response,
      isLoading: false,
    });
  },
});
