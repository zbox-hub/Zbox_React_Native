//index.js
import React, {Component} from 'react';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';
import Login from '../Auth/Login';
import IntroSlider from '../Intro/IntroSlider';
import SignUp from '../Auth/SignUp';
import ForgotPassword from '../Auth/ForgotPassword';

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            initial
            key="IntroSlider"
            component={IntroSlider}
            gesturesEnabled={false}
            title=""
            hideNavBar={true}
          />
          <Scene
            key="Login"
            component={Login}
            gesturesEnabled={false}
            title=""
            hideNavBar={true}
          />
          <Scene
            key="SignUp"
            component={SignUp}
            gesturesEnabled={false}
            title=""
            hideNavBar={true}
          />
          <Scene
            key="ForgotPassword"
            component={ForgotPassword}
            gesturesEnabled={false}
            title=""
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}
