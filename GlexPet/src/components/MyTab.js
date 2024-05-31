import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddPets from '../screens/AddPets';
import User from '../screens/User';
import Program from '../screens/Program';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

const MyTab = () => {
return (
  //   Esta es la TabBar o la barra de Navegación, falta corregir algo
  <Tab.Navigator
    sceneContainerStyle={styles.tabBar}
    screenOptions={{ tabBarStyle: { position: 'absolute' }, headerShown: false }}
  >
    <Tab.Screen name='AddPets' component={AddPets} />
      <Tab.Screen name='User' component={User} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Program' component={Program} />
      <Tab.Screen name='Cart' component={Cart} />
  </Tab.Navigator>
);
}

export default MyTab
const styles = StyleSheet.create({

  tabBar: {
    width: '100%',
    height: '100%',
  },
});