import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { moderateScale } from "../../utils/ResponsiveUi";
import { colors, fonts, images } from "../../themes";
import * as globals from "../../utils/globals";

export const SKELETON_SPEED = 1500;
export const SKELETON_BG = "#dddddd";
export const SKELETON_HIGHLIGHT = "#e7e7e7";
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get("window");

const ShareImagelistSkeleton = () => (
  <View style={styles.flexView}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={colors.lightPinkSkeleton}
      // highlightColor={colors.lightGrayBG}
    >
      <View style={styles.cashBackStyle} />
    </SkeletonPlaceholder>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={colors.lightPurplekeleton}
      highlightColor={colors.lightGrayBG}
    >
      <View style={{ flexDirection: "row", marginTop: moderateScale(10) }}>
        <View style={styles.listItem} />
        <View style={[styles.listItem]} />
      </View>
      <View style={{ flexDirection: "row", marginTop: moderateScale(20) }}>
        <View style={[styles.listItem]} />
        <View style={[styles.listItem]} />
      </View>
    </SkeletonPlaceholder>
  </View>
);

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  cashBackStyle: {
    height: moderateScale(30),
    width: moderateScale(200),
    borderRadius: moderateScale(15),
    marginTop: moderateScale(15),
    marginBottom: moderateScale(10),
    marginStart: moderateScale(15),
  },
  rowSearchWords: {
    height: moderateScale(23),
    width: moderateScale(130),
    borderRadius: moderateScale(11),
    marginHorizontal: 3,
  },
  listItem: {
    width: globals.screenWidth / 2 - moderateScale(23),
    borderRadius: moderateScale(10),
    height: moderateScale(302.5),
    marginStart: moderateScale(15),
  },
});

export default ShareImagelistSkeleton;
