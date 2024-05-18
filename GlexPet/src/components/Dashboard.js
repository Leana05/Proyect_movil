import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Dashboard = ({ navigation }) => {

  return (
    <View>
      <Text>Hola Dashboard</Text>
      <Button title='Navegar a agregar mascotas' onPress={() => navigation.navigate('AddPets')} />

      <Button title='Regresar a Home... again' onPress={() => navigation.push('Home')} />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({});
