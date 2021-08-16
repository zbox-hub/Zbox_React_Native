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

const HeaderSub = ({ icon, rightIcon, headerTxtMain, leftIconPress }) => {
  return (
    <View
      style={[
        styles.headerMainView,
        {
          marginTop: globals.isShareToTrendiiFrstTime ? 0 : moderateScale(-17),
        },
      ]}
    >
      <TouchableOpacity onPress={() => leftIconPress()}>
        <Image source={icon} style={styles.backBtnStyle} />
      </TouchableOpacity>
      <Text style={styles.headerTextStyle}>{headerTxtMain}</Text>
    </View>
  );
};

export default HeaderSub;

const styles = StyleSheet.create({
  headerMainView: {
    height: moderateScale(50),
    backgroundColor: colors.colorWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtnStyle: {
    height: moderateScale(19),
    width: moderateScale(23),
    resizeMode: "contain",
    marginHorizontal: moderateScale(15),
  },
  headerTextStyle: {
    fontSize: moderateScale(20),
    fontFamily: fonts.NunitoSansBold,
    color: colors.lightBlack,
  },
});
