import createReducer from "../createReducer";
import * as constants from "../../actions/HomeAction/constants";

const intialState = {
  isLoading: false,
  error: null,
};
export const homeReducer = createReducer(intialState, {
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
});
