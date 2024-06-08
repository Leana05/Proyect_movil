
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput,  View, Image, Pressable } from 'react-native';


const Login = ({ navigation }) => {

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [cedula, setCedula ] = useState('');

const handleLogin = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/validation/login/valiUser/${correo}/${contrasena}`, {});

    console.log('Respuesta del servidor:', response.data);

    if (response.data.val) {
      const cedula = response.data.cedula;
      console.log('Cédula extraída:', cedula);

      setCedula(cedula); // Guarda la cédula en el contexto

      navigation.navigate('MainTabs'); // Navega a la pantalla principal
    } else {
      console.error('Error de autenticación');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
      console.log(correo);
      console.log(contrasena);
};

  const ChangeSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles_login.containerAll}>
      {/* Círculos naranjas */}
      <View style={styles_login.orangeCircleTopLeft} />
      <View style={styles_login.orangeCircleTopLeft1} />
      <View style={styles_login.orangeCircleBottomRight} />
      <View style={styles_login.orangeCircleBottomRight1} />
      <View style={styles_login.dog}>
        <Image source={require('../img/perritologin.png')} style={styles_login.Img} />
      </View>
      <View style={styles_login.login_container}>
        <Text style={styles_login.title}>Inicio de Sesión</Text>
        <View style={styles_login.login}>
          <TextInput style={styles_login.input} placeholder='Correo' value={correo} onChangeText={setCorreo} />

          <TextInput
            style={styles_login.input}
            placeholder='Contraseña'
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />
          <View>
            <Text>¿Ha olvidado su contraseña?</Text>
          </View>
          <View style={styles_login.button_container}>
            <Pressable style={styles_login.loginButton} onPress={handleLogin}>
              <Text style={styles_login.loginButtonText}>Ingresar</Text>
            </Pressable>
            <Pressable style={styles_login.loginButton} onPress={ChangeSignUp}>
              <Text style={styles_login.loginButtonText}>Registrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles_login = StyleSheet.create({
  containerAll: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#FAFFD8',
    alignItems: 'center',
  },
  dog: {
    width: 150,
    height: 90,
  },
  Img: {
    width: '100%',
    height: '100%',
  },
  login_container: {
    flexDirection: 'column',
    width: '90%',
    height: 450,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#D676C1',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  login: {
    width: '60%',
    height: '60%',
    marginTop: 50,
    alignContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    width: '100%',
    padding: 5,
    backgroundColor: '#FAFFD8',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button_container: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  loginButton: {
    width: 150,
    backgroundColor: '#D676C1',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 50,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  orangeCircleTopLeft: {
    position: 'absolute',
    top: -150,
    left: -60,
    width: 250,
    height: 250,
    backgroundColor: '#D676C1',
    borderRadius: 200,
  },
  orangeCircleTopLeft1: {
    position: 'absolute',
    top: -250,
    left: 10,
    width: 300,
    height: 300,
    backgroundColor: '#D676C1',
    borderRadius: 200,
  },
  orangeCircleBottomRight: {
    position: 'absolute',
    top: 830,
    right: -50,
    width: 250,
    height: 250,
    backgroundColor: '#D676C1',
    borderRadius: 200,
  },
  orangeCircleBottomRight1: {
    position: 'absolute',
    top: 860,
    right: 80,
    width: 300,
    height: 300,
    backgroundColor: '#D676C1',
    borderRadius: 150,
  },
});
