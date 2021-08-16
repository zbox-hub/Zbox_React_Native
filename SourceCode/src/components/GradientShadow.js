import { Platform, Dimensions, View, Image } from "react-native";
import React, { Component } from "react";
import { moderateScale } from "../utils/ResponsiveUi";
import { images, fonts, colors } from "../themes";
import { ConstantUtils } from "../utils";
import LinearGradient from "react-native-linear-gradient";

const GradienShadow = ({ margin }) => {
  return (
    <Image
      source={images.shadowLine}
      style={{
        marginTop: moderateScale(5),
        marginStart: margin ? -moderateScale(15) : 0,
        marginEnd: margin ? -moderateScale(15) : 0,
        marginBottom: -moderateScale(10),
      }}
    ></Image>
    // <LinearGradient
    //   colors={[
    //     "transparent",
    //     "rgba(0, 0, 0, 0.09)",
    //     "rgba(0, 0, 0, 0.03)",
    //     // "rgba(0, 0, 0, 0.06)",
    //     "transparent",
    //   ]}
    //   style={{
    //     marginTop: moderateScale(5),
    //     height: Platform.OS == "ios" ? moderateScale(14) : moderateScale(14),
    //     marginStart: margin ? -moderateScale(15) : 0,
    //     marginEnd: margin ? -moderateScale(15) : 0,
    //   }}
    // ></LinearGradient>
    // <View
    //   style={{
    //     overflow: "hidden",
    //     paddingBottom: 5,
    //     marginStart: margin ? -moderateScale(15) : 0,
    //     marginEnd: margin ? -moderateScale(15) : 0,
    //   }}
    // >

    //   <View
    //     style={{
    //       backgroundColor: "#fff",
    //       // width: 300,
    //       height: 8,
    //       shadowColor: "rgba(0, 0, 0, 0.3)",
    //       shadowOffset: { width: 3, height: 1 },
    //       shadowOpacity: 0.4,
    //       shadowRadius: 3,
    //       elevation: 13,
    //       marginStart: margin ? -moderateScale(15) : 0,
    //       marginEnd: margin ? -moderateScale(15) : 0,
    //     }}
    //   />
    //      {/* <View
    //     style={{
    //       backgroundColor: "#fff",
    //       // width: 300,
    //       height: 8,
    //       shadowColor: "rgba(0, 0, 0, 0.4)",
    //       shadowOffset: { width: 0, height: 5},
    //       shadowOpacity: 0.3,
    //       shadowRadius: 3,
    //       elevation: 8,
    //       marginStart: margin ? -moderateScale(15) : 0,
    //       marginEnd: margin ? -moderateScale(15) : 0,

    //     }}
    //   />  */}
    //  </View>
  );
};

export default GradienShadow;
