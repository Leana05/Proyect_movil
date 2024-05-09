import React from 'react'
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa el icono de FontAwesome

// para los iconos se instalo npm install @expo/vector-icons
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <Image
          source={require('../img/huesito.png')} // Cambia la ruta de la imagen según tu ubicación
          style={styles.hueso}
        />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Buscar...' />
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <FontAwesome name='search' size={24} color='black' style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_store}>

      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },

  container_search: {
    width: '80%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hueso: {
    flex: 1,
    position: 'absolute',
    width: 400,
    height: '80%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 45,
    fontSize: 20,
    marginLeft: 5,
    paddingLeft: 20,
  },
  searchIcon:{
    fontSize:30,
  },
});
