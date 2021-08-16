import createReducer from "../createReducer";
import * as constants from "../../actions/LoginAction/constants";

const intialState = {
  isLoading: false,
  registerResData: null,
  loginResData: null,
  forgotPassResData: null,
  error: null,
};
export const loginReducer = createReducer(intialState, {
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
  [constants.GET_LOGIN](state, action) {
    return Object.assign({}, state, {
      loginResData: action.response,
      isLoading: false,
    });
  },
  [constants.GET_REGISTER](state, action) {
    return Object.assign({}, state, {
      registerResData: action.response,
      isLoading: false,
    });
  },
  [constants.GET_FORGOTPASS](state, action) {
    return Object.assign({}, state, {
      forgotPassResData: action.response,
      isLoading: false,
    });
  },
});
