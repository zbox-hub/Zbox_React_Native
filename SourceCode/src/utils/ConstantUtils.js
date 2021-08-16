import { images } from "../themes";
import { Platform, StatusBar, Dimensions } from "react-native";
import * as globals from "./globals";

export default ConstantUtils = {
  STATUSBAR_HEIGHT:
    Platform.OS === "ios"
      ? globals.iPhoneX
        ? 44
        : 20
      : StatusBar.currentHeight,
  hitSlop: {
    zero: { top: 0, bottom: 0, left: 0, right: 0 },
    twenty: { top: 20, bottom: 20, left: 20, right: 20 },
    sixteen: { top: 16, bottom: 16, left: 16, right: 16 },
    ten: { top: 10, bottom: 10, left: 10, right: 10 },
  },
  noDataFeeds:
    "Oops! Looks like you don’t have a feed yet.Shop from some images or use discover to populate your feed.",
  webClientId:
    "177309220463-oe1o041ib5rcblcm4l5de2lobgkr0t34.apps.googleusercontent.com",
  iosClientId:
    "177309220463-5a8cdol272ag8lfc8umieqek98dlkhde.apps.googleusercontent.com",
};
