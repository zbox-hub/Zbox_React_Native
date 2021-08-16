import { View, StyleSheet, StatusBar } from "react-native";
import React, { Component } from "react";
import { moderateScale } from "../utils/ResponsiveUi";
import { colors } from "../themes";
import { ConstantUtils } from "../utils";

const StatusbarComponent = ({ statusbarstyle, backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        barStyle={statusbarstyle == "dark" ? "dark-content" : "light-content"}
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: { height: ConstantUtils.STATUSBAR_HEIGHT },
});

export default StatusbarComponent;
