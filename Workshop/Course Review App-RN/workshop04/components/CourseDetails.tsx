import React from 'react';

import {
  StyleSheet,
} from 'react-native';


const CourseDetails = () => {
  return (null);
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
