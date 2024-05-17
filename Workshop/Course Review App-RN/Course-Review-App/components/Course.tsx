import React, { useContext, useState } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Stars from './Stars';
import { ICourse } from './ICourse';
import axios from 'axios';
import { GlobalContext } from '../context/context';

interface CourseProps {
  data: ICourse;
  index: number;
}

const Course = ({ data, index }: CourseProps) => {
  const { title, faculty, code, rating } = data;
  const navigation = useNavigation();
  const { state, setState } = useContext(GlobalContext);
  const infoPressed = () => {
    navigation.navigate('course-details', data);
  };

  const ondelete = async () => {
    try {
      const deleted = await axios.delete(`http://localhost:9000/courses/${data.id}`);
      console.log(deleted);
      if (deleted.status === 200) {
        let arr = state.filter((item) => item.id !== data.id);
        console.log(arr);
        setState(arr);
        return window.alert("course deleted succefully!");
      }
    } catch (error) {
      return window.alert("Unable to delete");
    }
  };


  return (
    <View
      style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={rating} />
        </View>

        <View style={styles.course}>
          <Text>{title}</Text>
          <Text style={styles.faculty}>{code} - {faculty}</Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight
            onPress={infoPressed}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Details</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={infoPressed}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={ondelete}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: 'column',
    flex: 8,
  },
  faculty: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    margin: 10,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default Course;
