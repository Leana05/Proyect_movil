import { FontAwesome } from '@expo/vector-icons'; // Importa el icono de FontAwesome
import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

// para los iconos se instalo npm install @expo/vector-icons
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <Image source={require('../img/huesito1.png')} style={styles.hueso} />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Buscar...' />
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <FontAwesome name='search' size={24} color='black' style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_store}>
        <View style={styles.selec_Masco}>
          <TouchableOpacity style={styles.imageButton}>
            <Image source={require('../img/perrito.png')} style={styles.butImDog} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageButton}>
            <Image source={require('../img/Gato.png')} style={styles.butImCat} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.store}>
          <Text style={styles.title}>Comida</Text>
          <View style={styles.containerScroll}>
            <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCar}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.title}>Juguetes</Text>
          <View style={styles.containerScroll}>
            <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.title}>Accesorios</Text>
          <View style={styles.containerScroll}>
            <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
              <View style={styles.card}>
                <TouchableOpacity style={styles.buttonCard}></TouchableOpacity>
                <View style={styles.precioCard}>
                  <Text style={styles.titlemoney}></Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAFFD8',
    padding: 10,
  },
  title: {
    fontSize: 30,
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
    width: 410,
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
  searchIcon: {
    fontSize: 30,
  },
  container_store: {
    width: '100%',
    height: '80%',
    marginBottom: 1,
  },

  selec_Masco: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 150,
    marginBottom: 5,
  },
  imageButton: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    alignContent: 'center',
  },
  butImCat: {
    width: '100%',
    height: '100%',
  },
  butImDog: {
    width: '85%',
    height: '85%',
  },
  store: {
    width: '100%',
  },
  containerScroll: {
    with: '100%',
    height: 250,
    borderWidth: 2,
    padding: 10,
  },

  containerCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 130,
    height: '100%',
    marginHorizontal:6,
    borderWidth: 3,
    borderRadius: 15,
  },
  butcar: {
    width: '100%',
    height: '100%',
  },
  buttonCard: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
  },
  precioCard: {
    position: 'absolute',
    bottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(2, 30, 10, 0.5)',
    marginBottom: 5,
  },
  titlemoney: {
    fontSize: 30,
    margin: 1,
    color: 'white',
    fontWeight: 'bold',
  },
});
