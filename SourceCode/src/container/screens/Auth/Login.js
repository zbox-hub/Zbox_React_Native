import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'Login :====';
class Login extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>Login screen.</Text>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
