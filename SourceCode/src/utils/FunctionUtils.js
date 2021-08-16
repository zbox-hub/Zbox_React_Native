import Toast from 'react-native-simple-toast';
import * as globals from '../utils/globals';
import {PreferenceManager} from './../utils';
class FunctionUtils {
  static showToast(toastString) {
    setTimeout(() => Toast.show(toastString, Toast.SHORT), 10);
  }

  static showLongToast(toastString) {
    setTimeout(() => Toast.show(toastString, Toast.LONG), 10);
  }

  static validateEmail = email => {
    var reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };

  static validatePassword = password => {
    var reg = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    return reg.test(password);
  };

  static validateName = name => {
    var reg = /^[a-zA-Z]+$/;
    return reg.test(name);
  };

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static async clearData() {
    console.log('clearData ::===> ');
    globals.isFromLogin = false;
    globals.isLoggedIn = false;
    globals.token = '';
    globals.userEmail = '';
    globals.sortFeedDataCopy = [];
    globals.deviceId = '';
    globals.deviceIdTemp = globals.deviceIdTemp;
    globals.registerPlatform = 'website';
    globals.isInstrModalShow = false;
    globals.registerPlatformMob = 'iOSApp';
    globals.selectedTab = 1;
    globals.isProfileVisible = false;
    globals.isSingleSelected = true;
    globals.isHomeScreenDataReLoad = true;
    await PreferenceManager.clearPreference();
  }
}

export default FunctionUtils;
