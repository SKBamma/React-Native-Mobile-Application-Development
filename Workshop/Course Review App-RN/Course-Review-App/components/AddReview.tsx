
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Starbutton from './starbutton';
import { useContext, useState } from 'react';

import { IReview } from './ICourse';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOCAL_STORAGE_KEY } from '../helper/constant';

import { GlobalContext } from '../context/context';

const AddReview = ({ navigation, route }: any) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { data, setData } = useContext(GlobalContext);
  const [review, setReview] = useState<IReview>({ name: '', rating: 5, comment: '' });
  const { code } = route.params;

  const onSubmit = async () => {
    console.log(code);
    const index = data.findIndex(x => x.code === code);
    if (index !== -1) {
      const obj = { ...data[index] };

      if (!obj.reviews) {
        obj.reviews = [];
      }

      obj.reviews.push({ ...review, rating: selectedValue });

      let sum = 0;
      for (let i = 0; i < obj.reviews.length; i++) {
        sum += obj.reviews[i].rating;
      }
      obj.rating = Math.ceil(sum / obj.reviews.length);
      data[index] = obj;
      // AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      setData([...data]);


      navigation.navigate('course-details', obj);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Review</Text>

      <TextInput placeholder='Please enter Your name..'
        style={styles.input} value={review.name}
        onChangeText={(text: string) => setReview({ ...review, name: text })} />

      <Text style={styles.ratingText}>Your Rating</Text>

      <View style={styles.stars}>
        {
          [1, 2, 3, 4, 5].map((value: number) =>
            <Starbutton key={value} value={value}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue} />)
        }
      </View>

      <TextInput placeholder='Please write your openion..'
        multiline numberOfLines={4}
        style={styles.input} value={review.comment}
        onChangeText={(text: string) => setReview({ ...review, comment: text })} />

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  button: {
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 24,

  },
  ratingText: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center"
  },
  starButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center"
  }
});

export default AddReview;
