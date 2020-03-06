/* eslint-disable react-native/no-inline-styles */
import React, {useReducer, useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Text, Input, Icon, Button} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {onUserRegister} from '../redux/actions';
import style from '../styles/Register';

const Reducers = (state, {type, name, payload}) => {
  switch (type) {
    case 'CHANGE_DATA':
      return {...state, [name]: payload};
    case 'INITIAL_STATE':
      return {email: '', username: '', password: '', password2: ''};
    default:
      return state;
  }
};

export const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, action] = useReducer(Reducers, {
    email: undefined,
    username: undefined,
    password: undefined,
    password2: undefined,
  });
  const {email, username, password, password2} = state;
  const [passHidden, setPassHidden] = useState(true);
  const [passHidden2, setPassHidden2] = useState(true);

  const user = useSelector(redux => redux.Auth.user);
  const loading = useSelector(redux => redux.Auth.loadingLog);

  useEffect(() => {
    if (user && email && username && password && password2) {
      action({type: 'INITIAL_STATE'});
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'MainDrawer'}],
      });
      navigation.action(resetAction);
    }
  });

  const onBtnRegisterPress = () => {
    if (!loading) {
      dispatch(
        onUserRegister({
          email,
          username,
          password,
          password2,
        }),
      );
    }
  };

  return (
    <View style={style.RegContainer}>
      <View style={style.RegLogo}>
        <Animatable.View
          animation={'fadeIn'}
          style={style.LogoIcon}
          duration={1000}>
          <Image
            source={require('../dist/img/icon.png')}
            style={style.LogoIconImg}
          />
        </Animatable.View>
      </View>
      <Animatable.Text animation="fadeIn" duration={2000}>
        <Text h3>Register</Text>
      </Animatable.Text>

      <View style={style.RegInput}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={24} color="#114B5F" />}
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'email', payload: text})
          }
          value={email}
        />
        <Input
          placeholder="Username"
          leftIcon={<Icon name="account-box" size={24} color="#114B5F" />}
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'username', payload: text})
          }
          value={username}
        />
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="#114B5F" />}
          rightIcon={
            <Icon
              name={passHidden ? 'visibility-off' : 'visibility'}
              size={24}
              color={passHidden ? '#bfc3c9' : '#114B5F'}
              onPress={() => setPassHidden(!passHidden)}
            />
          }
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'password', payload: text})
          }
          secureTextEntry={passHidden}
          value={password}
        />
        <Input
          placeholder="Re-enter password"
          leftIcon={<Icon name="lock" size={24} color="#114B5F" />}
          rightIcon={
            <Icon
              name={passHidden2 ? 'visibility-off' : 'visibility'}
              size={24}
              color={passHidden2 ? '#bfc3c9' : '#114B5F'}
              onPress={() => setPassHidden2(!passHidden2)}
            />
          }
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'password2', payload: text})
          }
          secureTextEntry={passHidden2}
          value={password2}
        />

        <View style={style.RegButtonContainer}>
          <TouchableOpacity
            onPress={onBtnRegisterPress}
            style={style.RegButtonStyle}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={style.RegButtonText}>Register</Text>
            )}
          </TouchableOpacity>
          {/* END OF REG BUTTON */}
        </View>

        {/* END OF REG INPUT */}
      </View>

      <View style={style.RegButtonArea}>
        <View style={style.LoginButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={style.LoginButtonText}>Back to Login</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* END OF BUTTON SECTION */}
      </View>

      {/* END OF REG CONTAINER */}
    </View>
  );
};
