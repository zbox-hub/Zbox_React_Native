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

const NoDataPlaceHolder = ({ img, btnTxt, btnPress, firstTxt, secTxt }) => {
  return (
    <View style={styles.noDataMianView}>
      <Text style={styles.looksLikeTxt}>{firstTxt}</Text>
      <Text style={styles.letsfindTxt}>{secTxt}</Text>
      <Image source={img} style={styles.noDataImg} />
      <TouchableOpacity onPress={() => btnPress()}>
        <View style={styles.uploadImgView}>
          <Text style={styles.uploadImgBtnTxt}>{btnTxt}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NoDataPlaceHolder;

const styles = StyleSheet.create({
  noDataMianView: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // paddingBottom: moderateScale(70),
  },
  noDataImg: {
    height: globals.screenHeight * 0.45,
    width: globals.screenWidth - 100,
    resizeMode: "contain",
  },
  uploadImgView: {
    borderRadius: moderateScale(20),
    height: moderateScale(38),
    width: moderateScale(175),
    backgroundColor: colors.lightBlack,
    alignItems: "center",
    justifyContent: "center",
  },
  looksLikeTxt: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: moderateScale(16),
    color: colors.blackShadeTxt,
    textAlign: "center",
  },
  letsfindTxt: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: moderateScale(16),
    color: colors.pinkValidation,
    marginTop: moderateScale(15),
  },
  uploadImgBtnTxt: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: moderateScale(16),
    color: colors.colorWhite,
  },
});
