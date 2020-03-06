/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const IconHome = ({icons, types, name, size = 30}) => {
  return (
    <View
      style={{
        // borderWidth: 1,
        alignItems: 'center',
        width: '25%',
        marginVertical: 10,
      }}>
      <Icon
        name={icons}
        size={size}
        type={types}
        color="tomato"
        containerStyle={{
          borderWidth: 2,
          borderColor: 'tomato',
          borderRadius: 45,
          width: 45,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Text style={{fontSize: 13}}>{name}</Text>
    </View>
  );
};

export default IconHome;
