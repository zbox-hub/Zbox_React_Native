import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import React, { Component } from "react";
import { moderateScale } from "../utils/ResponsiveUi";
import { images, fonts, colors } from "../themes";
import { ConstantUtils } from "../utils";

const Header = ({ icon, rightIcon, headerTxtMain, leftIconPress }) => {
  return (
    <View style={styles.headerMainView}>
      {leftIconPress ? (
        <TouchableOpacity onPress={() => leftIconPress()}>
          <Image source={icon} style={styles.backBtnStyle} />
        </TouchableOpacity>
      ) : (
        <Image source={icon} style={styles.backBtnStyle} />
      )}
      <Image source={images.trendiLogo} style={styles.trendiLogo} />
      <Image source={rightIcon} style={styles.backBtnStyle} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMainView: {
    height: moderateScale(50),
    backgroundColor: colors.colorWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtnStyle: {
    height: moderateScale(19),
    width: moderateScale(23),
    resizeMode: "contain",
    marginHorizontal: moderateScale(15),
  },
  trendiLogo: {
    height: moderateScale(20),
    width: moderateScale(100),
    resizeMode: "contain",
  },
});
