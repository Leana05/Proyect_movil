import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/components/Dashboard';
import Home from './src/components/Home';

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='User' component={'User'} />
        <Tab.Screen name='AddPets' component={'AddPets'} />
        <Tab.Screen name='Program' component={'Program'} />
        <Tab.Screen name='Cart' component={'Cart'} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
