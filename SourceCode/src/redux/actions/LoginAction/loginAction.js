//This is the class for the actions creators and action dispatchers

import {
  WebService,
  FunctionUtils,
  ApiUtils,
  PrefrenceManager,
} from "../../../utils";
import * as constants from "./constants";
import * as globals from "../../../utils/globals";

const TAG = "Login Action";

//action for start loader
export function actionStartRequest() {
  return {
    type: constants.START_REQUEST,
  };
}
/* action for end loader */
export function actionEndRequest() {
  return {
    type: constants.END_REQUEST,
  };
}

/* action for set error */
export function actionSetError(error) {
  return {
    type: constants.RESP_ERROR,
    error,
  };
}

//login action get data
export function actionGetLoginData(response) {
  return {
    type: constants.GET_LOGIN,
    response,
  };
}

//register action get data
export function actionGetRegisterData(response) {
  return {
    type: constants.GET_REGISTER,
    response,
  };
}

//Forgot password action get data
export function actionGetForgotPassData(response) {
  return {
    type: constants.GET_FORGOTPASS,
    response,
  };
}
