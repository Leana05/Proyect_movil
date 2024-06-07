import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import AddPets from './src/screens/AddPets';
import Cart from './src/screens/Cart';
import User from './src/screens/User';
import Products from './src/screens/Products';
import Pets from './src/screens/Pets';
import Pay from './src/screens/Pay';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='AddPets'
        component={AddPets}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='plus' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='User'
        component={User}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='user' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='shopping-cart' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Pets' component={Pets} />
        <Stack.Screen name='AddPets' component={AddPets} />
        <Stack.Screen name='Pay' component={Pay} />
        <Stack.Screen name='MainTabs' component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
