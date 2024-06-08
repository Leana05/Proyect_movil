import React, { useContext, useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'; 
import { UserContext } from '../components/UserContext';

const PetsItem = ({ item }) => (

  <View style={styles.petsContainer}>
    <View style={styles.containerImage}>
      <Image source={item.image} style={styles.petsImage} />
    </View>
    <View>
      <Text style={styles.petsName}>{item.nombre}</Text>
      <Text style={styles.species}>{item.especie}</Text>
      <Text style={styles.Race}>{item.raza}</Text>
      <Text style={styles.Race}>{item.sexo}</Text>
      <Text style={styles.Race}>{item.descripcion}</Text>      
    </View>

    <Pressable style={styles.TrashButton}>
      <FontAwesome name='trash' size={27} color='black' />
    </Pressable>
  </View>
);

const App = ({navigation}) => {
  const { cedula } = useContext(UserContext);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Pets/mascota/${cedula}`);
        const data = response.data;
        const Masco = data.map((mascota) => mascota.idMascota);
        console.log(Masco);

        setMascotas(data);
      } catch (error) {
        console.error('Error obteniendo las mascotas  :', error);
      }
    };

    fetchData();
  }, []);


    const ChangeAddPets = () => {
      navigation.navigate('MainTabs');
    };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={ChangeAddPets}>
        <FontAwesome name='arrow-left' size={27} color='black' />
      </Pressable>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Mis mascotas</Text>
      </View>

      <FlatList
        data={mascotas}
        keyExtractor={(item) => item.idMascota}
        renderItem={({ item }) => <PetsItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFD8',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  containertitle: {
    marginTop: 30,
    marginBottom: 10,
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontspecies: 'bold',
  },
  petsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#D676C1',
    paddingVertical: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  containerImage: {
    width: '50%',
  },
  petsImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  petsName: {
    fontSize: 20,
    fontspecies: 'bold',
    marginBottom: 5,
  },
  petsage: {
    fontSize: 20,
    fontspecies: 'bold',
    color: '#DAA520',
    marginBottom: 5,
  },
  Race: {
    fontSize: 20,
    marginBottom: 5,
  },
  species: {
    fontSize: 20,
    color: '#DAA520',
  },
  TrashButton:{
    marginLeft:50,
  },
});

export default App;
