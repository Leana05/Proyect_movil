import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import { useContext } from 'react';
// import { UserContext } from '../components/UserContext';

// asi es como se define la cedula
  // const { cedula } = useContext(UserContext);

// Importar imágenes locales
const images = {
  gato: require('../img/Gato.png'),
  // perro: require('../img/perrito.png'),
};

const pets = [
  {
    id: '1',
    name: 'Atún',
    age: '17 meses',
    Race: 'Siberiano',
    species: 'Gato',
    image: images.gato,
  },
  {
    id: '2',
    name: 'Salmon',
    age: '17 meses',
    Race: 'Siberiano',
    species: 'Gato',
    image: images.perro,
  },
];

const PetsItem = ({ item }) => (



  <View style={styles.petsContainer}>
    <View style={styles.containerImage}>
      <Image source={item.image} style={styles.petsImage} />
    </View>
    <View>
      <Text style={styles.petsName}>{item.name}</Text>
      <Text style={styles.petsage}>{item.age}</Text>
      <Text style={styles.Race}>{item.Race}</Text>
      <Text style={styles.species}>{item.species}</Text>
    </View>

    <TouchableOpacity style={styles.TrashButton}>
      <FontAwesome name='trash' size={27} color='black' />
    </TouchableOpacity>
  </View>
);

const App = ({navigation}) => {
    const ChangeAddPets = () => {
      navigation.navigate('MainTabs');
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={ChangeAddPets}>
        <FontAwesome name='arrow-left' size={27} color='black' />
      </TouchableOpacity>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Mis mascotas</Text>
      </View>

      <FlatList data={pets} keyExtractor={(item) => item.id} renderItem={({ item }) => <PetsItem item={item} />} />
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
