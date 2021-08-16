import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'Notifications :====';
class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>Notifications screen.</Text>
      </View>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
