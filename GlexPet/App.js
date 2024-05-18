import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/components/Dashboard';
import Home from './src/screens/Home';
import Program from './src/screens/Program'
import Login from './src/screens/Login';
import User from './src/screens/User'
import AddPets from './src/screens/AddPets';
import Cart from './src/screens/Cart';
import User from './src/screens/User';
import Program from './src/screens/Program';
import Loading from './src/screens/Loading';

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

    // Esta es la TabBar o la barra de Navegación
    <NavigationContainer screenOptions={{ headerShown: false}}>
      <Tab.Navigator sceneContainerStyle={styles.tabBar} screenOptions={{ tabBarStyle: { position: 'absolute' } }}>
        <Tab.Screen name='AddPets' component={AddPets} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='User' component={'User'} />
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
  tabBar:{
    width:'100%',
    height:'100%'
  }
});
