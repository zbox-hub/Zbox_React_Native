import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let TAG = 'Home :====';
class Home extends React.Component {
  render() {
    return (
      <View style={styles.flexView}>
        <Text>Home screen.</Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});
