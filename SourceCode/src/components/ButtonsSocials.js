import { TouchableOpacity, Text } from "react-native";
import React, { Component } from "react";
import { moderateScale } from "../utils/ResponsiveUi";

const ButtonsSocials = ({
  buttonTitle,
  height,
  width,
  backgroundColor,
  marginBottom,
  textStyle,
  onButtonPress,
  borderRadiusApply,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onButtonPress()}
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: moderateScale(20),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={textStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonsSocials;
