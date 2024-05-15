import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import HeaderStyle from '../styles/HeaderStyle';


const Header = () => {
  return (
    <View style={HeaderStyle.android}>
      <Image source={require('../images/course.png')} />

    </View>
  );
};


export default Header;
