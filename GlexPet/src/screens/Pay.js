// export default Pay;
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';

// Importar imágenes locales
const images = {
  //   gato: require('../img/Gato.png'),
  //   perro: require('../img/perrito.png'),
};

const products = [
  {
    id: '1',
    name: 'Fruitables - Snack Para Gato Atún Y Calabaza',
    price: '$16,150',
    originalPrice: '$19,000',
    discountPrice: '$17,670',
    weight: '70 GR',
    image: images.gato,
  },
  {
    id: '2',
    name: 'Fruitables Snack Para Gato Salmon Y Arandanos',
    price: '$16,618',
    originalPrice: '$19,550',
    discountPrice: '$18,182',
    weight: '70 GR',
    image: images.perro,
  },
  {
    id: '3',
    name: 'Fruitables Snack Para Gato Salmon Y Arandanos',
    price: '$16,618',
    originalPrice: '$19,550',
    discountPrice: '$18,182',
    weight: '70 GR',
    image: images.perro,
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.productContainer}>
    <View style={styles.offerTag}>
      <Text style={styles.offerText}>Oferta</Text>
    </View>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
    <Text style={styles.discountPrice}>
      {item.discountPrice} <Text style={styles.originalPrice}>{item.originalPrice}</Text>
    </Text>
    <Text style={styles.weight}>{item.weight}</Text>
  </View>
);

const Pay = ({ navigation }) => {
  const [confirming, setConfirming] = useState(false);

  const handlePurchase = () => {
    setConfirming(true);
  };

  const confirmPurchase = () => {
    // Aquí puedes agregar la lógica para confirmar la compra
    alert('Compra confirmada');
    setConfirming(false);
  };

  const cancelPurchase = () => {
    setConfirming(false);
  };

  const ChangeHome = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      {!confirming ? (
        <>
          <Pressable style={styles.backButton} onPress={ChangeHome}>
            <FontAwesome name='arrow-left' size={27} color='black' />
          </Pressable>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductItem item={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            style={{ flexGrow: 1 }}
          />
          <Pressable style={styles.purchaseButton} onPress={handlePurchase}>
            <Text style={styles.purchaseButtonText}>Comprar</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmText}>¿Confirmar compra?</Text>
          <View style={styles.confirmButtons}>
            <Pressable style={styles.confirmButton} onPress={confirmPurchase}>
              <Text style={styles.confirmButtonText}>Sí</Text>
            </Pressable>
            <Pressable style={styles.confirmButton} onPress={cancelPurchase}>
              <Text style={styles.confirmButtonText}>No</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFD8',
    paddingHorizontal: 30,
  },
  backButton: {
    width: '100%',
    height: 30,
    marginBottom: 10,
    marginTop: 50,
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
  purchaseButton: {
    backgroundColor: '#d676c1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  purchaseButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 20,
    marginBottom: 20,
  },
  confirmButtons: {
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#d676c1',
    width:50,
    height:50,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Pay;
