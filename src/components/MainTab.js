import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeNav from './HomeNav';
import Profile from './MainTab/Profile';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const ScreenOption = ({route}) => {
  return {
    tabBarIcon: ({focused, color, size}, iconName = '') => {
      if (route.name === 'HomeNav') {
        iconName = focused ? 'home' : 'home';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'restaurant-menu' : 'restaurant-menu';
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  };
};

const goLogout = nav => {
  return ({navigation}) => <Logout navigation={navigation} rootStack={nav} />;
};

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={ScreenOption}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="HomeNav" component={HomeNav} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Profile">{goLogout(navigation)}</Tab.Screen> */}
    </Tab.Navigator>
  );
};
