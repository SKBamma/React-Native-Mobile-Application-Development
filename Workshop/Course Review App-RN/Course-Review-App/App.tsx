import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';
import { ICourse } from './components/ICourse';
import { GlobalContext } from './context/context';

const { Navigator, Screen } = createBottomTabNavigator();
const datas = [
  { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
  { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
  { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
  { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
  { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
  { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
  { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
  { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];


export default function App() {
  const [data, setData] = useState<ICourse[]>(datas);


  return (
    <GlobalContext.Provider value={{ data, setData }}>
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
