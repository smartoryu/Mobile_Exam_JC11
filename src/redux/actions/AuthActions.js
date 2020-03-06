import {AsyncStorage, Alert} from 'react-native';
import Axios from 'axios';

import {API_URL, API_KEY} from '../../helpers/API_URL';
import {
  REG_START,
  REG_FAILED,
  REG_SUCCESS,
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../../helpers/types';

export const onUserRegister = ({email, username, password, password2}) => {
  return async dispatch => {
    if (email && username && password && password2) {
      if (password === password2) {
        dispatch({type: LOGIN_START});
        try {
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('password', password);
          await AsyncStorage.setItem('token', API_KEY);

          setTimeout(() => {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {email, username, password},
            });
          }, 2000);
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert(
          '',
          "Your password doesn't matched!",
          [
            // {text: 'Ask me later', onPress: () => console.log('Later pressed')},
            // {text: 'Cancel', onPress: () => console.log('Cancel pressed')},
            {text: 'Ok', onPress: () => console.log('Ok pressed')},
          ],
          {cancelable: false},
        );
      }
    } else {
      dispatch({type: LOGIN_FAILED});
      Alert.alert(
        '',
        'Please, fill all the field!',
        [
          // {text: 'Ask me later', onPress: () => console.log('Later pressed')},
          // {text: 'Cancel', onPress: () => console.log('Cancel pressed')},
          {text: 'Ok', onPress: () => console.log('Ok pressed')},
        ],
        {cancelable: false},
      );
    }
  };
};

export const onUserLogin = ({username}) => {
  return async dispatch => {
    if (username) {
      dispatch({type: LOGIN_START});
      await AsyncStorage.setItem('username', username);
      setTimeout(() => {
        dispatch({type: LOGIN_SUCCESS, payload: {username}});
      }, 1000);
    } else {
      console.log('tes');
      dispatch({type: LOGIN_START});
      setTimeout(() => {
        dispatch({type: LOGIN_FAILED});
        Alert.alert(
          '',
          'Input username!',
          [
            // {text: 'Ask me later', onPress: () => console.log('Later pressed')},
            // {text: 'Cancel', onPress: () => console.log('Cancel pressed')},
            {text: 'Ok', onPress: () => console.log('Ok pressed')},
          ],
          {cancelable: false},
        );
      }, 200);
    }
  };
};

export const alreadyLogin = user => {
  return {type: LOGIN_SUCCESS, payload: user};
};

export const onUserLogout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('username');
      dispatch({type: USER_LOGOUT});
    } catch (err) {
      console.log(err);
    }
  };
};
