import React from 'react';
import {
  createAppContainer,
  getActiveChildNavigationOptions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator(
  {
    JSHunt: {
      screen: Main,
    },
    Second: {
      screen: Product,
    },
  },
  {
    initialRouteName: 'JSHunt',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
