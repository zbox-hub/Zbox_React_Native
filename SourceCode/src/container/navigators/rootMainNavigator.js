import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import FirstScreen from './../firstScreen';

const AuthStack = createSwitchNavigator(
  {
    AuthFirst: FirstScreen,
  },
  {
    initialRouteName: 'AuthFirst',
  },
);

export default createAppContainer(AuthStack);
