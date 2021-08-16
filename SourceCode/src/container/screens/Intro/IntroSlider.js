import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'IntroSlider :====';
class IntroSlider extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>IntroSlider screen.</Text>
      </View>
    );
  }
}

export default IntroSlider;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
