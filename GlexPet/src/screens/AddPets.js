import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import SelectInput from 'react-native-picker-select';
import { UserContext } from '../components/UserContext';

const AddPets = ({ navigation }) => {

  const { cedula } = useContext(UserContext);

  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handlePets = async () => {
    const data = {
      nombre,
      especie,
      raza,
      sexo,
      fechaNacimiento,
      cedula,
      descripcion
    }

    try {
      const response = await axios.post('http://localhost:3000/Pets/mascota', data)
      console.log(response.data)
    } catch (error) {
      console.error('error al registrar mascota', error);
    }
  }

  const Especie = [
    { label: 'Canino', value: '0' },
    { label: 'Felino', value: '1' },
    { label: 'Ave', value: '2' },
    { label: 'Reptil', value: '3' },
  ];

  const Genero = [
    { label: 'Hembra', value: '0' },
    { label: 'Macho', value: '1' },
  ];
  const ChangePets = () => {
    navigation.navigate('Pets');
  };
  return (
    <ScrollView contentContainerStyle={styleAddPets.containerPets}>

      <View style={styleAddPets.containerHead}>
        <View style={styleAddPets.containerImg}>
          <Image style={styleAddPets.logo} resizeMethod='resize' source={require('../img/Logo.png')} />
        </View>

        <View style={styleAddPets.Profile}>
          <Text style={styleAddPets.title}>Nombre</Text>
          <TextInput style={styleAddPets.TextInput} placeholder='Ingrese el nombre de la mascota' value={nombre} onChangeText={setNombre}/>

          <Text style={styleAddPets.title}>Descripción</Text>
          <TextInput style={styleAddPets.TextInput} placeholder='Describa a su mascota (opcional)' value={descripcion} onChangeText={setDescripcion} />

          <Text style={styleAddPets.title}>Fecha de Nacimiento</Text>
          <TextInput style={styleAddPets.TextInput} placeholder='Ingrese la fecha de nacimiento de la mascota' value={fechaNacimiento} onChangeText={setFechaNacimiento} />

          <Text style={styleAddPets.title}>Raza</Text>
          <TextInput style={styleAddPets.TextInput} placeholder='Ingrese la raza de la mascota' value={raza} onChangeText={setRaza} />
        </View>
      </View>

      <View style={styleAddPets.containerCmBox}>
        <View style={styleAddPets.comboBox}>
          <SelectInput
            onValueChange={(value) => console.log(value)}
            placeholder={{ label: 'Selecciona una especie', value: null }}
            items={Especie}
            style={pickerSelectStyles}
            value={especie} onChangeText={setEspecie}
          />
        </View>

        <View style={styleAddPets.comboBox}>
          <SelectInput
            onValueChange={(value) => console.log(value)}
            placeholder={{ label: 'Selecciona un género', value: null }}
            items={Genero}
            style={pickerSelectStyles}
            value={sexo} onChangeText={setSexo}
          />
        </View>
      </View>

      <View style={styleAddPets.fitButton}>
        <View style={styleAddPets.btnSeparator}>
          <Pressable style={styleAddPets.touchable} onPress={handlePets}>
            <Text style={styleAddPets.txtButton}>Guardar</Text>
          </Pressable>
        </View>

        <View style={styleAddPets.btnSeparator}>
          <Pressable style={styleAddPets.touchable} onPress={ChangePets}>
            <Text style={styleAddPets.txtButton}>Ver Mascotas</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styleAddPets = StyleSheet.create({
  containerPets: {
    flex: 1,
    backgroundColor: '#faffd8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  containerHead: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#9ee6df',
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
  },
  containerCmBox: {
    width: '100%',
    backgroundColor: '#8ca1d3',
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 20,
  },
  comboBox: {
    width: '90%',
    marginVertical: 10,
  },
  TextInput: {
    borderBottomWidth: 3,
    borderColor: '#8C41D3',
    borderRadius: 10,
    width: '100%',
    marginVertical: 5,
    padding: 10,
  },
  containerImg: {
    marginTop: 80,
    width: '40%',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  Profile: {
    width: '60%',
    padding: 10,
    justifyContent: 'center',
  },
  fitButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnSeparator: {
    width: '45%',
  },
  touchable: {
    backgroundColor: '#d676c1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
  },
  txtButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#8C41D3',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#8C41D3',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});

export default AddPets;