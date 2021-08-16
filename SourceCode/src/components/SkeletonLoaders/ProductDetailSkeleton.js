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

const ProductDetailSkeleton = () => (
  <View style={styles.flexView}>
    <View style={{ flexDirection: "row" }}>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.productMainImgStyle} />
      </SkeletonPlaceholder>
      <View>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.lightPinkSkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.faveImageStyle} />
          <View
            style={[styles.faveImageStyle, { marginTop: moderateScale(10) }]}
          />
        </SkeletonPlaceholder>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
          >
            <View style={styles.inspirationMain} />
            <View style={styles.inspirationTextStyle} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
          >
            <View style={styles.inspirationImageStyle} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </View>
    <View style={{ marginHorizontal: moderateScale(15) }}>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.logoStyle} />
        <View style={styles.productText} />
        <View style={styles.priceText} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.cashBackStyle} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.btnStyle} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.similarText} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.similarListItem} />
          <View style={styles.similarListItem} />
        </View>
      </SkeletonPlaceholder>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },

  productMainImgStyle: {
    height: moderateScale(300),
    width: globals.screenWidth - moderateScale(110),
    borderRadius: moderateScale(15),
    marginHorizontal: moderateScale(15),
  },
  faveImageStyle: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  inspirationImageStyle: {
    height: moderateScale(90),
    width: moderateScale(71),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  inspirationMain: {
    height: moderateScale(14),
    width: moderateScale(50),
    borderRadius: moderateScale(7),
  },
  inspirationTextStyle: {
    height: moderateScale(14),
    width: moderateScale(71),
    marginTop: moderateScale(8),
    borderRadius: moderateScale(7),
  },
  logoStyle: {
    height: moderateScale(26),
    width: moderateScale(80),
    borderRadius: moderateScale(13),
    marginTop: moderateScale(15),
  },
  productText: {
    height: moderateScale(22),
    width: moderateScale(260),
    borderRadius: moderateScale(11),
    marginTop: moderateScale(15),
  },
  priceText: {
    height: moderateScale(18),
    width: moderateScale(150),
    borderRadius: moderateScale(9),
    marginTop: moderateScale(15),
  },
  cashBackStyle: {
    height: moderateScale(20),
    width: moderateScale(200),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
  },
  btnStyle: {
    height: moderateScale(40),
    width: "100%",
    borderRadius: moderateScale(20),
    marginTop: moderateScale(15),
  },
  similarText: {
    height: moderateScale(20),
    width: moderateScale(180),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
  },
  similarListItem: {
    width: globals.screenWidth / 2 - moderateScale(23),
    marginTop: moderateScale(10),
    marginRight: moderateScale(15),
    borderRadius: moderateScale(10),
    height: moderateScale(310),
  },
});

export default ProductDetailSkeleton;
