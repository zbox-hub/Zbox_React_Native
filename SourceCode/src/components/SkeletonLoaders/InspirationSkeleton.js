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

const InspirationSkeleton = ({ isSimilarProductLoding }) => (
  <View style={styles.flexView}>
    {!isSimilarProductLoding ? (
      <View style={{ flexDirection: "row" }}>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={colors.greySkeleton}
          // highlightColor={colors.lightGrayBG}
        >
          <View style={styles.productMainImgStyle} />
        </SkeletonPlaceholder>
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
      </View>
    ) : null}
    <View
      style={{ marginStart: moderateScale(12), marginTop: moderateScale(10) }}
    >
      {!isSimilarProductLoding ? (
        <View>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
              <View style={styles.productItemsStyle} />
            </View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
              <View style={styles.productItemText} />
            </View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.similarText} />
          </SkeletonPlaceholder>
        </View>
      ) : null}

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
    <View
      style={{
        position: "absolute",
        bottom: moderateScale(40),
        right: moderateScale(20),
      }}
    >
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.darkGreySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.filterStyle} />
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
    width: globals.screenWidth - moderateScale(160),
    borderRadius: moderateScale(10),
    marginStart: moderateScale(80),
  },
  faveImageStyle: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(22),
  },
  productItemsStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(12),
  },
  productItemText: {
    height: moderateScale(14),
    width: moderateScale(70),
    borderRadius: moderateScale(7),
    marginRight: moderateScale(12),
    marginTop: moderateScale(8),
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
  filterStyle: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
  },
});

export default InspirationSkeleton;
