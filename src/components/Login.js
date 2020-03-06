/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useReducer} from 'react';
import {View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

import style from '../styles/Login';
import {onUserLogin} from '../redux/actions/AuthActions';

const Reducers = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return {...state, [action.name]: action.payload};
    case 'INITIAL_STATE':
      return {username: '', password: '', passHidden: true};
    default:
      return state;
  }
};

export const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(redux => redux.Auth.user);
  const loading = useSelector(redux => redux.Auth.loadingLog);
  const [state, action] = useReducer(Reducers, {
    username: '',
    password: '',
    passHidden: true,
  });

  useEffect(() => {
    if (user) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'MainDrawer'}],
      });
      action({type: 'INITIAL_STATE'});
      navigation.dispatch(resetAction);
    }
  });

  const onBtnLoginPress = () => {
    if (!loading) {
      dispatch(
        onUserLogin({username: state.username, password: state.password}),
      );
    }
  };
  // console.log(user);
  setTimeout(() => {
    if (!user) {
      return (
        <>
          <View style={style.LoginContainer}>
            <View style={style.LoginLogo}>
              <Animatable.View
                animation={'fadeIn'}
                style={style.LogoIconContainer}
                duration={1000}>
                <Image
                  source={require('../dist/img/icon.png')}
                  style={style.LogoIconImg}
                />
              </Animatable.View>
              <Animatable.View
                animation={'fadeIn'}
                style={style.LogoTextContainer}
                duration={2000}>
                <Image
                  style={style.LogoTextImg}
                  source={require('../dist/img/text.png')}
                />
              </Animatable.View>
            </View>

            <View style={style.LoginInput}>
              <Input
                onChangeText={text =>
                  action({type: 'CHANGE_DATA', name: 'username', payload: text})
                }
                leftIcon={
                  <Icon name="account-circle" size={24} color="#114B5F" />
                }
                value={state.username}
                placeholder="Username"
              />
              <Input
                onChangeText={text =>
                  action({type: 'CHANGE_DATA', name: 'password', payload: text})
                }
                leftIcon={<Icon name="lock" size={24} color="#114B5F" />}
                rightIcon={
                  <Icon
                    name={state.passHidden ? 'visibility-off' : 'visibility'}
                    size={24}
                    color={state.passHidden ? '#bfc3c9' : '#114B5F'}
                    onPress={() =>
                      action({
                        type: 'CHANGE_DATA',
                        name: 'passHidden',
                        payload: !state.passHidden,
                      })
                    }
                  />
                }
                secureTextEntry={state.passHidden}
                value={state.password}
                placeholder="Password"
              />
              {/* END OF LOGIN INPUT */}

              <View style={style.LoginButtonContainer}>
                <TouchableOpacity
                  onPress={onBtnLoginPress}
                  style={style.LoginButtonStyle}>
                  {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={style.LoginButtonText}>Login</Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* END OF LOGIN BUTTON */}
            </View>

            <View style={style.LoginButtonArea}>
              <View style={style.RegButtonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={style.RegButtonText}>Go to Register</Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* END OF BUTTON SECTION */}
            </View>
            {/* END OF LOGIN CONTAINER */}
          </View>
        </>
      );
    }
  }, 2000);

  return (
    <View style={style.LoginContainer}>
      {/* <Animatable.View animation={'fadeIn'} duration={1000}> */}
      <Image
        source={require('../dist/img/logo.png')}
        style={{height: 205, width: 200}}
      />
      {/* </Animatable.View> */}
    </View>
  );
};
