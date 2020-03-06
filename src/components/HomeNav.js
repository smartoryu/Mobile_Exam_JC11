import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
// import RestaurantDetails from './MainTab/Profile';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
