import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import axios from 'axios';

// El componente que muestra cada producto individual
const ProductItem = ({ item }) => (
  <View style={styles.productContainer}>
    <View style={styles.offerTag}>
      <Text style={styles.offerText}>Oferta</Text>
    </View>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName}>{item.nombre}</Text>
    <Text style={styles.productPrice}>${item.precio}</Text>
    <Text style={styles.discountPrice}>
      ${item.precio * 0.9}
    </Text>
    <Text style={styles.weight}>{item.descripcion}</Text>
  </View>
);


const App = ({ navigation }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {


      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/Shop/productos');
          const data = response.data;
          const idProduc = data.map((producto) => producto.idProducto);
          console.log(idProduc);

          setProductos(data);
        } catch (error) {
          console.error('Error obteniendo los productos:', error);
        }
      };

      fetchData();
    }, []);

  console.log(productos);

  const ChangeHome = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={ChangeHome}>
        <FontAwesome name='arrow-left' size={27} color='black' />
      </Pressable>

      <View style={styles.container_search}>
        <Image source={require('../img/huesito1.png')} style={styles.hueso} resizeMode='stretch' />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Buscar...' />
          <Pressable onPress={() => console.log('Search pressed')}>
            <FontAwesome name='search' size={24} color='black' style={styles.searchIcon} />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.idProducto}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFD8',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  container_search: {
    marginTop: 70,
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
  productContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 15,
    marginVertical: 10,
  },
  offerTag: {
    backgroundColor: '#FF6F61',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  offerText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DAA520',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 14,
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
  weight: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});

export default App;
