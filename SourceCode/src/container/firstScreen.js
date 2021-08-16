import React, {Component} from 'react';
import {View, Text} from 'react-native';

var TAG = 'firstscreen:==';
class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateScreen: false,
      // appState: AppState.currentState,
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 20, margin: 40, textAlign: 'center'}}>
          {'Welcome To Shopper Smart'}
        </Text>
      </View>
    );
  }
}

export default FirstScreen;
