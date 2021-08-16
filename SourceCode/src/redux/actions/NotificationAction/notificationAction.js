//This is the class for the actions creators and action dispatchers
import { Alert } from "react-native";
import {
  WebService,
  FunctionUtils,
  ApiUtils,
  PrefrenceManager,
} from "../../../utils";
import * as constants from "./constants";
import * as globals from "../../../utils/globals";

const TAG = "Notification Action";

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

//Notifications items action get data
export function actionGetNotifications(response) {
  return {
    type: constants.GET_NOTIFICATIONS,
    response,
  };
}


//add status error
export function actionErrorStatus(error) {
  return {
    type: constants.RESP_STATUS_ERROR,
    error,
  };
}
