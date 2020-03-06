import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useDispatch} from 'react-redux';
import {AsyncStorage, StatusBar} from 'react-native';
import {alreadyLogin} from '../redux/actions';

import {Login} from './Login';
import {Register} from './Register';
import {MainTab} from './MainTab';

const MainStack = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        dispatch(alreadyLogin({username}));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
