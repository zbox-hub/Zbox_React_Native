import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";
import { colors, images } from "../themes";
import { moderateScale } from "../utils/ResponsiveUi";

export default class CustomProgressBar extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration,
        useNativeDriver: false,
      }).start();
    }
  }

  render() {
    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    });

    return (
      <View
        style={[
          {
            flexDirection: "row",
            height: 12,
            marginStart: moderateScale(40),
            marginEnd: moderateScale(40),
            flex: 1,
          },
          //   row ? { flex: 1 } : undefined,
        ]}
      >
        <View style={{ flex: 1 }}>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: colors.grayBorderBox, borderRadius: 10 },
            ]}
          />
          <Animated.Image
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              resizeMode:"cover",
              height: 12,
              //   backgroundColor: "rgb(243,44,151)",
              borderRadius: 10,
            }}
            source={images.gradientProgress}
          ></Animated.Image>
        </View>
      </View>
    );
  }
}

CustomProgressBar.defaultProps = {
  height: moderateScale(18),
  borderColor: "white",
  borderWidth: 2,
  borderRadius: 10,
  barColor: "blue",
  fillColor: "red",
  duration: 100,
};
