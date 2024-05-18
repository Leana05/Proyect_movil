import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import AddPets from './src/screens/AddPets';
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';
import Program from './src/screens/Program';
import User from './src/screens/User.js';

export default function App() {

  // Definimos la variable Stack que no permitirá usar los atribustos de nuestra barra de navegación
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // // Este es otro método de Navegación
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='Dashboard' component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // Esta es la TabBar o la barra de Navegación, falta corregir algo
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Tab.Navigator sceneContainerStyle={styles.tabBar} screenOptions={{ tabBarStyle: { position: 'absolute' } }}>
        <Tab.Screen name='AddPets' component={AddPets} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='User' component={User} />
        <Tab.Screen name='Program' component={Program} />
        <Tab.Screen name='Cart' component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#faffd8',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  tabBar: {
    width: '100%',
    height: '100%'
  }
});
