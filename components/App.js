/**
 * this is screen list
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login';
import index from './index';
import Home from './Home';
import ViewWish from './ViewWish';
import DetailWish from './DetailWish';
const App = createStackNavigator({
  //screnn
  // Login: {
  //   screen: Login
  // },
  index: {
    screen: index
  },
  Home: {
    screen: Home
  },
  ViewWish:{
    screen: ViewWish
  },
  DetailWish:{
    screen: DetailWish
  },
}, {
  //setting
  initialRouteName: 'index'
})
export default createAppContainer(App);