import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState("I' m learning React Navtive!");
  const [count, setCount] = useState(0);

  const handleOnpress = () => {
    setCount(count + 5);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.backgroudColor}>Hello!</Text>
      <Text style={{ backgroundColor: "green" }}>my first mobile app!!</Text>
      <Text>{message}</Text>

      {/* button */}
      <Text>Button Count: {count}</Text>
      <Button title='Increase' onPress={handleOnpress} color={"grey"} />
      {/* pressable: it is like a container */}

      <Text> Pressable Count: {count}</Text>
      <Pressable onPress={handleOnpress} style={styles.pressableButton}>
        <Text>Increase</Text>
      </Pressable>

      {/* touchable-hilights  is like a coinatiner*/}
      <Text>Touchable Count: {count}</Text>
      <TouchableHighlight onPress={handleOnpress}>
        <Text style={styles.touchable}>Increase</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroudColor: {
    color: "red"
  },
  pressableButton: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 25,
    borderStyle: 'solid',
    width: "100%",
    margin: 20,
    padding: 5,
    alignItems: 'center'
  },
  touchable: {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    width: 150,
    padding: 5,
    textAlign: 'center'
  }
});
