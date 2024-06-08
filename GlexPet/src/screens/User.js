import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../components/UserContext';

const User = ({navigation}) => {



  const { cedula } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [nombre, setNombre] = useState('');
 const [apellido, setApellido] = useState('');
 const [fechaNacimiento, setFechaNacimiento] = useState('');
 const [direccion, setDireccion] = useState('');
 const [telefono, setCelular] = useState('');

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://192.168.20.26:3000/SignUp/login/user/${cedula}`);
          const usua=setUserData(response.data); // Assuming response.data contains user data
          // console.log(response.data); // Imprimir datos del usuario por consola
          setNombre(response.data.nombre);
          setApellido(response.data.apellido);
          setFechaNacimiento(response.data.fechaNacimiento);
          setDireccion(response.data.direccion);
          setCelular(response.data.celular);

        } catch (error) {
          console.error('Error obteniendo los datos del usuario:', error);
        }
      };

      fetchData();
    }, [cedula]);


    const handleSignUp = async () => {
        const data = {
          nombre,
          apellido,
          fechaNacimiento,
          direccion,
          celular,
        };
        try {
          // Mostrar alerta al entrar al bloque try
   
          const response = await axios.patch(`http://192.168.20.26:3000/SignUp/login/user/${cedula}`, data);
          console.log(response.data);
          
        } catch (error) {
          console.error('error al registrar', error);
        }
      
    };
    const DelateUser = async () =>{
      try {
        alert('se Elimino la cuenta')
        const response = await axios.delete(`http://192.168.20.26:3000/SignUp/login/user/${cedula}`);
        ChangeLogin();
      } catch (error) {
          console.error('error al eliminar la cuenta', error);

      }
    }
    const ChangeLogin = () => {
      navigation.navigate('Login');
    };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={stylesUser.container}>
      <ScrollView contentContainerStyle={stylesUser.scrollContainer}>
        <View style={stylesUser.decorative1}></View>
        <View style={stylesUser.decorative2}></View>

        <View style={stylesUser.data_container}>
          <View style={stylesUser.center}>
            <View style={stylesUser.photo}>
              <Icon name='camera-alt' size={50} color='#000' />
            </View>
            <View style={stylesUser.textContainer}>
              <Text style={stylesUser.textN}>Nombre</Text>
              <Text style={stylesUser.textNN}>Correo</Text>
            </View>
          </View>

          <View style={stylesUser.viewPets}>
            <Text style={stylesUser.title}>Mascotas</Text>
            <View style={stylesUser.petsIcons}>
              <View style={stylesUser.iconWithText}>
                <View style={stylesUser.photo2}>
                  <Icon name='add' size={50} color='#000' />
                </View>
                <Text style={stylesUser.iconText}>Nuevo</Text>
              </View>
              <View style={stylesUser.iconWithText}>
                <View style={stylesUser.photo2}>
                  <Icon name='camera-alt' size={50} color='#000' />
                </View>
                <Text style={stylesUser.iconText}>Nombre</Text>
              </View>
            </View>
          </View>
          <View style={stylesUser.containerActualizar}>
            <Pressable style={stylesUser.loginButton}>
              <Text style={stylesUser.loginButtonText} onPress={handleSignUp}>
                Actualizar
              </Text>
            </Pressable>
          </View>
          <View style={stylesUser.data_input}>
            <Text style={stylesUser.title}>Datos Personales</Text>
            <TextInput
              style={stylesUser.input}
              inputMode='numeric'
              placeholder='Id'
              value={cedula}
              onChangeText={cedula}
              editable={false}
            />
            <TextInput style={stylesUser.input} placeholder='Nombre' value={nombre} onChangeText={setNombre} />
            <TextInput style={stylesUser.input} placeholder='Apellido' value={apellido} onChangeText={setApellido} />
            <TextInput
              style={stylesUser.input}
              placeholder='Fecha de nacimiento'
              value={fechaNacimiento}
              onChangeText={setFechaNacimiento}
            />
            <TextInput style={stylesUser.input} placeholder='Dirección' value={direccion} onChangeText={setDireccion} />

            <TextInput
              style={stylesUser.input}
              // inputMode='numeric'
              placeholder='Celular'
              value={telefono}
              onChangeText={setCelular}
            />
          </View>

          <View style={stylesUser.button_container}>
            <Pressable style={stylesUser.loginButton} onPress={ChangeLogin}>
              <Text style={stylesUser.loginButtonText}>Cerrar Sesión</Text>
            </Pressable>
            <Pressable style={stylesUser.loginButton}>
              <Text style={stylesUser.loginButtonText} onPress={DelateUser}>
                Eliminar Cuenta
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default User;

const stylesUser = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFD8',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  data_container: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#D676C1',
    backgroundColor: 'rgba(214, 118, 192, 0.2)',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  decorative1: {
    position: 'absolute',
    width: '110%',
    height: 70,
    backgroundColor: '#D676C1',
    top: 0,
  },
  decorative2: {
    position: 'absolute',
    width: '100%',
    height: 5,
    backgroundColor: '#9EE6DF',
    top: 60,
  },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: '#9EE6DF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo2: {
    width: 70,
    height: 70,
    backgroundColor: '#E8BBCD',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  center: {
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  viewPets: {
    width: '100%',
    marginVertical: 20,
  },
  textN: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  textNN: {
    fontSize: 23,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  petsIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconWithText: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },

  data_input: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    height: 40,
    fontSize: 18,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FAFFD8',
    borderRadius: 5,
    marginBottom: 10,
  },
  button_container: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#D676C1',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  containerActualizar: {
    width: '100%',
    height: 50,
    paddingLeft:180,
  },
});
