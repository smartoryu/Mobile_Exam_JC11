import React from 'react';
import {Button, Text, View, TouchableOpacity, Alert} from 'react-native';
import style from '../styles/Logout';
import {useDispatch, useSelector} from 'react-redux';
import {onUserLogout} from '../redux/actions/AuthActions';

export const Logout = ({navigation}) => {
  const dispatch = useDispatch();

  const onBtnLogoutPress = () => {
    Alert.alert(
      '',
      'Are you sure to logout?',
      [
        // {text: 'Ask me later', onPress: () => console.log('Later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel pressed')},
        {text: 'Ok', onPress: () => dispatch(onUserLogout())},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={style.SettingContainer}>
      <View style={style.ButtonContainer}>
        <TouchableOpacity onPress={onBtnLogoutPress} style={style.ButtonStyle}>
          <Text style={style.ButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={style.CancelContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.CancelStyle}>
          <Text style={style.CancelText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
