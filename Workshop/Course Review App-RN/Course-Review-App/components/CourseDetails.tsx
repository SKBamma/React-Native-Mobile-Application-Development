import React from 'react';
// import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ICourse } from './ICourse';
import Stars from './Stars';
import ReviewList from './reviewlist';

type Props = {
  navigation: any,
  route: any;
};
const CourseDetails = ({ navigation, route }: Props) => {
  const { title, faculty, code, rating, reviews } = route.params;
  // const navigation = useNavigation();

  const navigateToAddReview = () => {
    navigation.navigate('add-review', route.params);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.name}>{title}</Text>
      <Text style={styles.info}>{code}</Text>
      <Text style={styles.info}>{faculty}</Text>
      <Stars rating={rating} />

      {/* <ReviewList data={reviews} /> */}

      <Pressable style={styles.button} onPress={navigateToAddReview}>
        <Text style={styles.buttonText}>Add Review</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    marginTop: 5
  },
  info: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CourseDetails;
