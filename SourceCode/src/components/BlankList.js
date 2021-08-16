import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, fonts } from "../themes";
import { moderateScale } from "../utils/ResponsiveUi";

const BlankList = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataTxt}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  noDataTxt: {
    color: colors.lightBlack,
    fontFamily: fonts.NunitoSansRegular,
    fontSize: moderateScale(14),
  },
});

export default BlankList;
