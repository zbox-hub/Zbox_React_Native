import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../utils/ResponsiveUi";
import { fonts } from "../themes";
import * as globals from "../utils/globals";

const CropperButton = (props) => (
  <TouchableOpacity onPress={props.onDone} style={styles.touchable}>
    <Text style={styles.text}>Find Item</Text>
  </TouchableOpacity>
);

export default CropperButton;

CropperButton.propTypes = {
  onDone: PropTypes.func,
  onRotate: PropTypes.func,
  onCancel: PropTypes.func,
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: fonts.NunitoSansSemiBold,
  },
  touchable: {
    paddingStart: moderateScale(20),
    paddingEnd: moderateScale(20),
    paddingTop: moderateScale(8),
    paddingBottom: moderateScale(8),
    backgroundColor: "black",
    alignSelf: "center",
    position: "absolute",
    top:  -globals.screenHeight * 0.059,
    borderRadius: moderateScale(18),
  },
});
