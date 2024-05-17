import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/About';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { ICourse } from './components/ICourse';
import { GlobalContext } from './context/context';
import axios from 'axios';

const { Navigator, Screen } = createBottomTabNavigator();


export default function App() {
  const [state, setState] = useState<ICourse[]>([]);

  async function loadCourses() {
    try {
      const res = await axios.get("http://localhost:9000/courses");
      console.log(res.data);
      if (res.status === 200) {
        setState(res.data);
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    loadCourses();
  }, []);


  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <NavigationContainer>
        <Navigator>

          <Screen name='course' component={Home}
            options={{ title: 'Home', headerShown: false }} />

          <Screen name='about' component={About}
            options={{ title: 'About' }} />

        </Navigator>
      </NavigationContainer >
    </GlobalContext.Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
