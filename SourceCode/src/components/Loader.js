import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../themes";
import { moderateScale } from "../utils/ResponsiveUi";
import * as globals from "../utils/globals";

const Loader = ({ visible, includeTab }) => {
  return (
    <View
      style={[
        styles.loaderMainView,
        {
          height: visible ? globals.screenHeight + moderateScale(25) : "0%",
          width: visible ? globals.screenWidth : "0%",
        },
      ]}
    >
      <ActivityIndicator
        size={"large"}
        animating={visible}
        color={colors.pinkValidation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderMainView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
