import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, ScrollView, Image } from 'react-native';

const SignUp = () => {
    return (
      <ScrollView contentContainerStyle={stylesSignUp.container}>
        <View style={stylesSignUp.orangeCircleTopLeft} />
        <View style={stylesSignUp.orangeCircleTopLeft1} />
        <View style={stylesSignUp.orangeCircleTopLeft2} />

        <View style={stylesSignUp.orangeCircleBottomRight} />
        <View style={stylesSignUp.orangeCircleBottomRight1} />
        <View style={stylesSignUp.orangeCircleBottomRight2} />
      
        <View style={stylesSignUp.data_container}>
          <Text style={stylesSignUp.text}>Registro</Text>
          <TextInput style={stylesSignUp.input} keyboardType='numeric' placeholder='Id'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Nombre'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Apellido'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Fecha de nacimiento'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Dirección'></TextInput>
          <TextInput style={stylesSignUp.input} keyboardType='numeric' placeholder='Celular'></TextInput>
          <Text style={stylesSignUp.text}>Usuario</Text>
          <TextInput style={stylesSignUp.input} placeholder='Correo'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Contraseña'></TextInput>
          <TextInput style={stylesSignUp.input} placeholder='Confirmar Contraseña'></TextInput>

          <Pressable style={stylesSignUp.SignUpButton}>
            <Text style={stylesSignUp.SignUptext}>Registrar</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
    
};

export default SignUp

const stylesSignUp = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFFD8',
    padding: 10,
  },
  data_container: {
    width: '80%',
    height: 600,
    borderWidth: 1,
    borderColor: '#D676C1',
    backgroundColor: 'rgba(214, 118, 192, 0.2)',
    alignItems: 'center',
    top: 12,
  },
  input: {
    height: 35,
    fontSize: 20,
    width: '80%',
    padding: 3,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FAFFD8',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
  SignUpButton: {
    width: 125,
    height: 40,
    backgroundColor: '#D676C1',
    borderWidth: 1,
    borderColor: '#8CA1D3',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  SignUptext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
  orangeCircleTopLeft: {
    position: 'absolute',
    top: -150,
    left: -60,
    width: 250,
    height: 250,
    backgroundColor: '#8CA1D3',
    borderRadius: 200,
  },
  orangeCircleTopLeft1: {
    position: 'absolute',
    top: -250,
    left: 10,
    width: 300,
    height: 300,
    backgroundColor: '#9EE6DF',
    borderRadius: 200,
  },
  orangeCircleTopLeft2: {
    position: 'absolute',
    top: 10,
    left: -70,
    width: 150,
    height: 150,
    backgroundColor: '#9EE6DF',
    borderRadius: 200,
  },
  orangeCircleBottomRight: {
    position: 'absolute',
    top: 860,
    right: -50,
    width: 250,
    height: 250,
    backgroundColor: '#8CA1D3',
    borderRadius: 200,
  },
  orangeCircleBottomRight1: {
    position: 'absolute',
    top: 850,
    right: 80,
    width: 300,
    height: 300,
    backgroundColor: '#9EE6DF',
    borderRadius: 150,
  },
  orangeCircleBottomRight2: {
    position: 'absolute',
    top: 860,
    left: -25,
    width: 150,
    height: 150,
    backgroundColor: '#8CA1D3',
    borderRadius: 150,
  },
});