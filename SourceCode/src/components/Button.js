import { TouchableOpacity, Text } from "react-native";
import React, { Component } from "react";
import { moderateScale } from "../utils/ResponsiveUi";

const Button = ({
  buttonTitle,
  height,
  width,
  backgroundColor,
  marginBottom,
  textStyle,
  onButtonPress,
  borderRadiusApply,
  isBorder,
  borderWidth,
  borderColor,
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
        borderWidth: borderWidth === undefined ? 0 : borderWidth,
        borderColor,
      }}
    >
      <Text style={textStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
