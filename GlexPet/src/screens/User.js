// import React from 'react';
// import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const User = () => {
//     return (
//         <ScrollView contentContainerStyle={stylesUser.container}>
//             <View style={stylesUser.decorative1}></View>
//             <View style={stylesUser.decorative2}></View>

//             <View style={stylesUser.data_container}>
//                 <View style={stylesUser.center}>
//                     <View style={stylesUser.photo}>
//                         <Icon name="camera-alt" size={50} color="#000" />
//                     </View>
//                     <View style={stylesUser.textContainer}>
//                         <Text style={stylesUser.textN}>Nombre</Text>
//                         <Text style={stylesUser.textNN}>Correo</Text>
//                     </View>
//                 </View>

//                 <View style={stylesUser.viewPets}>
//                     <Text style={stylesUser.title}>Mascotas</Text>
//                     <View style={stylesUser.petsIcons}>
//                         <View style={stylesUser.iconWithText}>
//                             <View style={stylesUser.photo2}>
//                                 <Icon name="add" size={50} color="#000" />
//                             </View>
//                             <Text style={stylesUser.iconText}>Nuevo</Text>
//                         </View>
//                         <View style={stylesUser.iconWithText}>
//                             <View style={stylesUser.photo2}>
//                                 <Icon name="camera-alt" size={50} color="#000" />
//                             </View>
//                             <Text style={stylesUser.iconText}>Nombre</Text>
//                         </View>
//                     </View>
//                 </View>

//                 <View style={stylesUser.data_input}>
//                     <Text style={stylesUser.title}>Datos Personales</Text>
//                     <TextInput style={stylesUser.input} keyboardType='numeric' placeholder='Id'></TextInput>
//                     <TextInput style={stylesUser.input} placeholder='Nombre'></TextInput>
//                     <TextInput style={stylesUser.input} placeholder='Apellido'></TextInput>
//                     <TextInput style={stylesUser.input} placeholder='Fecha de nacimiento'></TextInput>
//                     <TextInput style={stylesUser.input} placeholder='Dirección'></TextInput>
//                     <TextInput style={stylesUser.input} keyboardType='numeric' placeholder='Celular'></TextInput>
//                 </View>

//                 <View style={stylesUser.button_container}>
//                     <TouchableOpacity style={stylesUser.loginButton}>
//                         <Text style={stylesUser.loginButtonText}>Cerrar Sesión</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// export default User

// const stylesUser = StyleSheet.create({
//     container: {
//         display: 'flex',
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#FAFFD8',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 10,
//     },

//     data_container: {
//         width: '90%',
//         height: 800,
//         borderWidth: 1,
//         borderColor: '#D676C1',
//         backgroundColor: 'rgba(214, 118, 192, 0.2)',
//         alignItems: 'center',
//         marginTop: 50,
//     },

//     decorative1: {
//         position: 'absolute',
//         width: '110%',
//         height: 70,
//         backgroundColor: '#D676C1',
//         top: 0,
//     },

//     decorative2: {
//         position: 'absolute',
//         width: '100%',
//         height: 5,
//         backgroundColor: '#9EE6DF',
//         top: 60,
//     },

//     photo: {
//         width: 100,
//         height: 100,
//         backgroundColor: '#9EE6DF',
//         borderRadius: 200,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     photo2: {
//         width: 70,
//         height: 70,
//         backgroundColor: '#E8BBCD',
//         borderRadius: 200,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: 5,
//     },

//     center: {
//         width: '90%',
//         height: 150,
//         backgroundColor: 'rgba(250, 255, 216, 0.2)',
//         marginTop: 10,
//         backgroundColor:'red',
//         alignItems: 'center',
//     },

//     textContainer: {
//         marginTop: 0, // Ajusta el valor según sea necesario para el espacio deseado
//         alignItems: 'center',
//     },

//     viewPets: {
//         width: '90%',
//         height: '18%',
//         backgroundColor: 'rgba(250, 255, 216, 0.2)',
//         alignItems: 'flex-start',
//         marginBottom: 20,
//     },

//     textN: {
//         fontSize: 23,
//         fontWeight: 'bold',
//         marginBottom: -10,
//     },

//     textNN: {
//         fontSize: 23,
//     },

//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         alignSelf: 'flex-start',
//         marginLeft: 10,
//     },

//     petsIcons: {
//         flexDirection: 'row',
//         marginTop: 10,
//     },

//     iconWithText: {
//         alignItems: 'center',
//         marginHorizontal: 10, // Ajusta el espacio horizontal entre los íconos según sea necesario
//     },

//     iconText: {
//         marginTop: 5, // Ajusta el espacio entre el icono y el texto
//         fontSize: 16, // Ajusta el tamaño del texto según sea necesario
//         textAlign: 'center',
//     },

//     data_input: {
//         width: '90%',
//         height: '35%',
//         backgroundColor: 'rgba(250, 255, 216, 0.2)',
//         alignItems: 'center',
//         top: 12,
//     },

//     input: {
//         height: 30,
//         fontSize: 20,
//         width: '100%',
//         padding: 2,
//         borderWidth: 1,
//         borderColor: '#000',
//         backgroundColor: '#FAFFD8',
//         borderRadius: 5,
//         marginBottom: 10,
//         paddingHorizontal: 30,
//     },

//     button_container: {
//         width: '90%',
//         alignContent: 'center',
//         alignItems: 'center',
//         marginTop: 30,
//         backgroundColor: 'rgba(250, 255, 216, 0.2)',
//     },
//     loginButton: {
//         width: '90%',
//         backgroundColor: '#D676C1',
//         paddingVertical: 10,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         marginHorizontal: 50,
//     },
//     loginButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 20,
//         textAlign: 'center',
//     },
// })
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = () => {
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

          <View style={stylesUser.data_input}>
            <Text style={stylesUser.title}>Datos Personales</Text>
            <TextInput style={stylesUser.input} keyboardType='numeric' placeholder='Id' />
            <TextInput style={stylesUser.input} placeholder='Nombre' />
            <TextInput style={stylesUser.input} placeholder='Apellido' />
            <TextInput style={stylesUser.input} placeholder='Fecha de nacimiento' />
            <TextInput style={stylesUser.input} placeholder='Dirección' />
            <TextInput style={stylesUser.input} keyboardType='numeric' placeholder='Celular' />
          </View>

          <View style={stylesUser.button_container}>
            <TouchableOpacity style={stylesUser.loginButton}>
              <Text style={stylesUser.loginButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesUser.loginButton}>
              <Text style={stylesUser.loginButtonText}>Eliminar Cueta</Text>
            </TouchableOpacity>
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
    marginTop:10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
