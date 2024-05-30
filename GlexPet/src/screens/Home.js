
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const Home = () => {
  const comidaData = [
    // { id: 1, price: '$10', image: require('../img/perrito.png') },
    // { id: 2, price: '$20', image: require('../img/comida2.png') },
    // Añadir más datos según sea necesario
  ];

  const juguetesData = [
    // { id: 1, price: '$5', image: require('../img/juguete1.png') },
    // { id: 2, price: '$15', image: require('../img/juguete2.png') },
    // Añadir más datos según sea necesario
  ];

  const accesoriosData = [
    // { id: 1, price: '$8', image: require('../img/accesorio1.png') },
    // { id: 2, price: '$18', image: require('../img/accesorio2.png') },
    // Añadir más datos según sea necesario
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <Image source={require('../img/huesito1.png')} style={styles.hueso} resizeMode='stretch' />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Buscar...' />
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <FontAwesome name='search' size={24} color='black' style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container_store}>
        <Text style={styles.title}>Comida</Text>
        <View style={styles.containerScroll}>
          <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
            {comidaData.map((item) => (
              <Card key={item.id} price={item.price} image={item.image} />
            ))}
          </ScrollView>
        </View>
        <Text style={styles.title}>Juguetes</Text>
        <View style={styles.containerScroll}>
          <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
            {juguetesData.map((item) => (
              <Card key={item.id} price={item.price} image={item.image} />
            ))}
          </ScrollView>
        </View>
        <Text style={styles.title}>Accesorios</Text>
        <View style={styles.containerScroll}>
          <ScrollView contentContainerStyle={styles.containerCard} horizontal={true}>
            {accesoriosData.map((item) => (
              <Card key={item.id} price={item.price} image={item.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const Card = ({ price, image }) => (
  <View style={styles.card}>
    <TouchableOpacity style={styles.buttonCard}>
      <Image source={image} style={styles.cardImage} />
    </TouchableOpacity>
    <View style={styles.precioCard}>
      <Text style={styles.titlemoney}>{price}</Text>
    </View>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFFD8',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  container_search: {
    marginTop: 30,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hueso: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 190,
    height: 35,
    fontSize: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  searchIcon: {
    fontSize: 30,
    marginLeft: 2,
  },
  container_store: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
  },
  containerScroll: {
    width: '100%',
    height: 250,
    borderWidth: 2,
    borderColor: '#DDD',
    padding: 10,
    borderRadius: 10,
  },
  containerCard: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 130,
    height: '100%',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: '#DDD',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  buttonCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  precioCard: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(2, 30, 10, 0.7)',
  },
  titlemoney: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
