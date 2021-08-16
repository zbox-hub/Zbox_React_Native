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

const WishListSkeleton = () => (
  <View style={styles.flexView}>
    <View
      style={{
        flexDirection: "row",
        marginStart: moderateScale(10),
        marginTop: moderateScale(10),
      }}
    >
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightGrayBG}
        // highlightColor={colors.lightGrayBG}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.tabView} />
          <View style={[styles.tabView, { marginStart: moderateScale(10) }]} />
        </View>
      </SkeletonPlaceholder>
      <View
        style={{
          position: "absolute",
          right: moderateScale(10),
          alignSelf: "center",
        }}
      >
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.greySkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.deleteView} />
        </SkeletonPlaceholder>
      </View>
    </View>
    <View>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightGreySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={{ flexDirection: "row", marginTop: moderateScale(10) }}>
          <View style={styles.listItem}></View>
          <View style={styles.listItem}></View>
        </View>
      </SkeletonPlaceholder>
      <View style={{ flexDirection: "row", marginTop: moderateScale(10) }}>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.mediumGreySkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.listItem}></View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.lightGreenSkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.listItem}></View>
        </SkeletonPlaceholder>
      </View>
      <View style={{ flexDirection: "row", marginTop: moderateScale(10) }}>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.lightPinkSkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.listItem}></View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.semilightPinkSkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.listItem}></View>
        </SkeletonPlaceholder>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  tabView: {
    height: moderateScale(40),
    width: moderateScale(100),
    borderRadius: moderateScale(20),
  },
  deleteView: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
  },
  listItem: {
    width: globals.screenWidth / 2 - moderateScale(23),
    borderRadius: moderateScale(10),
    height: moderateScale(302.5),
    marginStart: moderateScale(15),
  },
});

export default WishListSkeleton;
