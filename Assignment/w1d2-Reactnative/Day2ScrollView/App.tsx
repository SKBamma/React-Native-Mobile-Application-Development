import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert, Button, FlatList, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text
  , TextInput, View
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "SD550-MSD";

function Product(data: any) {
  return (
    <View>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text>{data.name}</Text>
      <Text>{"$" + data.price}</Text>
    </View>
  );

}
export default function App() {
  const [products, setProducts] = useState<any>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i + 1,
        name: "name" + i,
        price: 100 + i,
        image: 'https://picsum.photos/200/300'
      });
    }
    setProducts(arr);
  }, []);

  const onSave = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
    } catch (error) {

    }
  };
  const onLoadData = async () => {
    try {
      setLoading(true);
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setName(name);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <ActivityIndicator size={"small"} /> */}

        {/* Scrollview  */}
        {/* <ScrollView>
        {
          products.map((product: any) => <Product key={product.id} {...product} />)
        }
      </ScrollView> */}

        {/* FlatList  */}
        {/* <FlatList
          data={products}
          renderItem={({ item }: any) => <Product {...item} />}
          keyExtractor={(product: any) => product.id}
        /> */}


        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            value={name}
            onChangeText={(text: string) => setName(text)}
          />
          <Button title="Save" onPress={onSave} />
          <Button title="Load Data" onPress={onLoadData} />
        </KeyboardAvoidingView>
      </SafeAreaView>

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
