/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Tabnavigation
 */

import { createAppContainer, TabBarBottom } from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import BuaSang from '../components/BuaSang';
import BuaTrua from '../components/BuaTrua';
import BuaToi from '../components/BuaToi';

export default createAppContainer(
  createMaterialTopTabNavigator (
    {
      BuaSang: { screen: BuaSang },
      BuaTrua: { screen: BuaTrua },
      BuaToi: { screen: BuaToi },
    },
    {
      initialRouteName: 'BuaSang',
      swipeEnabled: true,
      animationEnabled: true
    },
  )
);
