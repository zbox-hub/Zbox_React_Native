import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'Profile :====';
class Profile extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>Profile screen.</Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
