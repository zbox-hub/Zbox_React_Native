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

const HomeSkeletonSingle = ({ isSecondViewShow }) => (
  <View style={{ flex: 1 }}>
    {/* <View style={styles.headerMainView}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={images.drawer} style={styles.backBtnStyle} />
        <Image source={images.trendiLogo} style={styles.trendiLogo} />
      </View>
      <View style={styles.roundHeaderView}></View>
    </View> */}
    <View style={styles.rowTabMainView}>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.tabView]} />
        <View style={[styles.tabView]} />
      </View>
      {isSecondViewShow ? <View style={styles.roundHeaderView2} /> : null}
    </View>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={colors.lightPurplekeleton}
      highlightColor={colors.lightGrayBG}
    >
      <View style={styles.skeltonMainView}>
        {/* <SkeletonPlaceholder
          style={styles.sortTypeAbsoluteView}
        ></SkeletonPlaceholder> */}
        {/* <View style={styles.sortTypeAbsoluteView} /> */}
      </View>
    </SkeletonPlaceholder>
    {isSecondViewShow ? <View style={styles.sortTypeAbsoluteView} /> : null}

    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={colors.lightPinkSkeleton}
      highlightColor={colors.lightGrayBG}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: moderateScale(15),
        }}
      >
        <View
          style={[styles.likeDislikeView, { marginRight: moderateScale(10) }]}
        />
        <View style={[styles.likeDislikeView]} />
      </View>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={colors.lightPurplekeleton}
      highlightColor={colors.grayBorderBox}
    >
      <View style={styles.skeltonMainView}></View>
      <View style={styles.sortTypeAbsoluteView} />
    </SkeletonPlaceholder>
    {/* <View style={styles.sortTypeAbsoluteView2} /> */}
  </View>
);

const styles = StyleSheet.create({
  skeltonMainView: {
    marginHorizontal: moderateScale(15),
    marginVertical: moderateScale(8),
    borderWidth: 0,
    borderRadius: moderateScale(5),
    height: height * 0.6,
    elevation: moderateScale(5),
    // shadowOpacity: 0.6,
    // shadowRadius: 5,
    // shadowOffset: { height: 0, width: 0 },
    //backgroundColor: SKELETON_BG,
  },
  headerMainView: {
    height: moderateScale(50),
    backgroundColor: colors.colorWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: moderateScale(15),
  },
  tabView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayBG,
    height: moderateScale(35),
    width: moderateScale(70),
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(13),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  rowTabMainView: {
    height: moderateScale(50),
    backgroundColor: colors.colorWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(15),
  },
  headerTxtMain: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: moderateScale(20),
    color: colors.blackShadeTxt,
  },
  backBtnStyle: {
    height: moderateScale(19),
    width: moderateScale(23),
    resizeMode: "contain",
    marginHorizontal: moderateScale(15),
  },
  roundHeaderView: {
    height: moderateScale(26),
    width: moderateScale(26),
    borderRadius: moderateScale(13),
    backgroundColor: colors.lightGrayBG,
  },
  roundHeaderView2: {
    height: moderateScale(34),
    width: moderateScale(34),
    borderRadius: moderateScale(17),
    backgroundColor: colors.grayBorderBox,
  },
  likeDislikeView: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(16),
    backgroundColor: colors.lightGrayBG,
  },
  trendiLogo: {
    height: moderateScale(20),
    width: moderateScale(100),
    resizeMode: "contain",
  },
  sortTypeAbsoluteView: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: moderateScale(80),
    right: moderateScale(30),
    backgroundColor: colors.grayBorderBox,
    height: moderateScale(26),
    width: moderateScale(180),
    borderRadius: moderateScale(13),
  },
  sortTypeAbsoluteView2: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: moderateScale(680),
    right: moderateScale(30),
    backgroundColor: colors.grayBorderBox,
    height: moderateScale(26),
    width: moderateScale(180),
    borderRadius: moderateScale(13),
  },
});

export default HomeSkeletonSingle;
