import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { moderateScale } from "../../utils/ResponsiveUi";
import { colors, fonts, images } from "../../themes";

export const SKELETON_SPEED = 1500;
export const SKELETON_BG = "#dddddd";
export const SKELETON_HIGHLIGHT = "#e7e7e7";
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get("window");

const SearchSkeleton = () => (
  <View style={styles.flexView}>
    <View style={styles.blackBg}>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPointsWhite}
        // highlightColor={colors.lightGrayBG}
      >
        <View
          style={{ flexDirection: "row", paddingBottom: moderateScale(10) }}
        >
          <View style={styles.rowSearchWords}></View>
          <View style={styles.rowSearchWords}></View>
          <View style={styles.rowSearchWords}></View>
          <View style={styles.rowSearchWords}></View>
          <View style={styles.rowSearchWords}></View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.pinkRowView}></View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={{ flexDirection: "row", paddingBottom: moderateScale(9) }}>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View
          style={{ flexDirection: "row", paddingBottom: moderateScale(10) }}
        >
          <View style={styles.pinkRowSmall}></View>
          <View style={styles.pinkRowSmall}></View>
          <View style={styles.pinkRowSmall}></View>
          <View style={styles.pinkRowSmall}></View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={[styles.pinkRowView, { width: moderateScale(80) }]}></View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={{ flexDirection: "row", paddingBottom: moderateScale(9) }}>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
          <View style={styles.boxView}></View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={styles.pinkRowView}></View>
      </SkeletonPlaceholder>
      <View style={{ flexDirection: "row", paddingBottom: moderateScale(9) }}>
        <View style={styles.trendiiTopProductsMainView}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.trendiImages} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.pinkRowSmall2}></View>
            <View style={styles.pinkRowSmall2}></View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPurpleSke}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.grayLine1}></View>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.trendiiTopProductsMainView}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.trendiImages} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.pinkRowSmall2}></View>
            <View style={styles.pinkRowSmall2}></View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPurpleSke}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.grayLine1}></View>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.trendiiTopProductsMainView}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.trendiImages} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.pinkRowSmall2}></View>
            <View style={styles.pinkRowSmall2}></View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPurpleSke}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.grayLine1}></View>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.trendiiTopProductsMainView}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.greySkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.trendiImages} />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPinkSkeleton}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.pinkRowSmall2}></View>
            <View style={styles.pinkRowSmall2}></View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={colors.lightPurpleSke}
            // highlightColor={colors.lightGrayBG}
          >
            <View style={styles.grayLine1}></View>
          </SkeletonPlaceholder>
        </View>
      </View>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.lightPinkSkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={[styles.pinkRowView, { width: moderateScale(80) }]}></View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={colors.greySkeleton}
        // highlightColor={colors.lightGrayBG}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.boxViewBlogs}></View>
          <View style={styles.boxViewBlogs}></View>
        </View>
      </SkeletonPlaceholder>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  blackBg: {
    height: moderateScale(35),
    backgroundColor: colors.colorBlack,
    paddingBottom: moderateScale(10),
  },
  rowSearchWords: {
    height: moderateScale(23),
    width: moderateScale(80),
    borderRadius: moderateScale(11),
    marginHorizontal: 3,
  },
  pinkRowView: {
    height: moderateScale(15),
    width: moderateScale(140),
    color: colors.lightPinkSkeleton,
    marginTop: moderateScale(10),
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  boxView: {
    height: moderateScale(170),
    width: moderateScale(100),
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(9),
  },
  boxViewBlogs: {
    height: moderateScale(170),
    width: width * 0.5,
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(9),
  },
  pinkRowSmall: {
    height: moderateScale(8),
    width: moderateScale(100),
    color: colors.lightPinkSkeleton,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
  },
  pinkRowSmall2: {
    height: moderateScale(8),
    width: moderateScale(72),
    color: colors.lightPinkSkeleton,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  grayLine1: {
    height: moderateScale(8),
    width: moderateScale(68),
    color: colors.lightPinkSkeleton,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  trendiiTopProductsMainView: {
    alignItems: "center",
    borderWidth: 0.5,
    height: moderateScale(170),
    width: moderateScale(100),
    borderColor: colors.platinumStatus,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(9),
    marginLeft: moderateScale(10),
  },
  trendiImages: {
    height: moderateScale(120),
    width: moderateScale(100),
    backgroundColor: colors.greySkeleton,
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
});

export default SearchSkeleton;
