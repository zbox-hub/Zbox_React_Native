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
import * as globals from "../utils/globals";

const HeaderMain = ({
  icon,
  rightIcon,
  headerTxtMain,
  leftIconPress,
  rightIconPress,
  isLoader,
}) => {
  return (
    <View
      style={[
        styles.headerMainView,
        {
          marginTop: globals.isShareToTrendiiFrstTime ? 0 : moderateScale(-17),
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => leftIconPress()}>
          <Image source={icon} style={styles.backBtnStyle} />
        </TouchableOpacity>
        {headerTxtMain != "" ? (
          <Text style={styles.headerTxtMain}>{headerTxtMain}</Text>
        ) : (
          <Image source={images.trendiLogo} style={styles.trendiLogo} />
        )}
      </View>
      {!isLoader ? (
        <TouchableOpacity onPress={() => rightIconPress()}>
          <Image source={rightIcon} style={styles.backBtnStyle} />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            height: moderateScale(32),
            width: moderateScale(32),
            borderRadius: moderateScale(16),
            backgroundColor: colors.greySkeleton,
            marginHorizontal: moderateScale(15),
          }}
        ></View>
      )}
    </View>
  );
};

export default HeaderMain;

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
  headerTxtMain: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: moderateScale(20),
    color: colors.blackShadeTxt,
  },
});
