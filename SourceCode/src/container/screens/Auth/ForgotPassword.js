import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'ForgotPassword :====';
class ForgotPassword extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>Forgot password screen.</Text>
      </View>
    );
  }
}

export default ForgotPassword;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
