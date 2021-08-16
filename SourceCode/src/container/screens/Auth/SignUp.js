import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'SignUp :====';
class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>SignUp screen.</Text>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
