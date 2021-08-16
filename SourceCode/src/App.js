import React, {Component} from 'react';
import {View} from 'react-native';
import RootMainStackNavigator from '../src/container/navigators/rootMainNavigator';
export default class App extends Component {
  render() {
    return (
      <View>
        <RootMainStackNavigator />
      </View>
    );
  }
}
