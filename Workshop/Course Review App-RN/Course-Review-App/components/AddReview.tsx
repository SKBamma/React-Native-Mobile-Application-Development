
import {
  StyleSheet,
} from 'react-native';

const AddReview = () => {

  return (null);
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
    borderRadius: 3,
    fontSize: 24
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
