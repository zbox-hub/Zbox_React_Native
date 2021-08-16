import React, {Component} from 'react';
import {View} from 'react-native';
import RootMainStackNavigator from './rootMainNavigator';

const TAG = '==:== RootNavigation:';
export default class RootNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <RootMainStackNavigator />
      </View>
    );
  }
}
