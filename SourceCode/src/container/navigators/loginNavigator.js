import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Auth/Login';
import FirstScreen from '../firstScreen';
import IntroSlider from '../Intro/IntroSlider';
import SignUp from '../Auth/SignUp';
import ForgotPassword from '../Auth/ForgotPassword';
import ForgotPasswordSuccess from '../Auth/ForgotPasswordSuccess';
import TrendiiMainNavigator from './trendiiMainNavigator';

const LoginStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },

    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    ForgotPasswordSuccess: {
      screen: ForgotPasswordSuccess,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    IntroSlider: {
      screen: IntroSlider,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    TrendiiMainNavigator: {
      screen: TrendiiMainNavigator,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(LoginStackNavigator);
