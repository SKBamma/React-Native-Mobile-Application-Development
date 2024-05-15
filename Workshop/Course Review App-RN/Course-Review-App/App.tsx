import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
