import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert, Button, Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text,
  TextInput, TouchableHighlight, View
} from 'react-native';

export default function App() {
  const [state, setState] = useState({ username: '', password: '' });

  const onSubmit = () => {
    return Alert.alert("HI sURESH");
  };
  return (
    <ImageBackground source={require('./assets/back.jpg')} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.imageRow}>
          <Image source={require('../Day2ScrollView/assets/RN-logo.jpg')} style={styles.image} />

          <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
        </View>


        <Text style={styles.day2}>Day 2: ScrollViwe and Flatlist</Text>
        {/* TextInput handle multiple input we can make one state or seperate state */}
        <TextInput style={styles.textInput}
          placeholder='Username' value={state.username}
          onChangeText={(text: string) => setState({ ...state, username: text })} />

        <TextInput placeholder='Password' style={styles.textInput}
          value={state.password}
          onChangeText={(text: string) => setState({ ...state, password: text })} />

        <Button title='Submit' onPress={onSubmit} color={"white"} />

      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  day2: {
    color: 'blue',
    backgroundColor: 'salmon'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    borderStyle: 'solid',
    margin: 10,
    padding: 5,
    backgroundColor: "whitesmoke"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  submit: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
  }
});
