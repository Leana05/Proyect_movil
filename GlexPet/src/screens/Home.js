import { FontAwesome } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, TextInput, Pressable, View, Text } from 'react-native';


const Home = ({navigation}) => {


  const ChangeProducts = () => {
    navigation.navigate('Products');
  };

  const comidaData = [
    { id: 1, price: 'Alimento' },
    { id: 2, price: 'Arena' },
    { id: 3, price: 'Accesorios' },
    { id: 4, price: 'Snacks' },
    // Añade más items según sea necesario
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container_search}>
        <Image source={require('../img/huesito1.png')} style={styles.hueso} resizeMode='stretch' />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Buscar...' />
          <Pressable onPress={() => console.log('Search pressed')}>
            <FontAwesome name='search' size={24} color='black' style={styles.searchIcon} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.title}>Categorias Gatos</Text>
      <View style={styles.containerScroll}>
        {comidaData.map((item) => (
          <Pressable key={item.id} style={styles.cardContainer} onPress={ChangeProducts}>
            <Card price={item.price} image={item.image} />
          </Pressable>
        ))}
      </View>
      <Text style={styles.title}>Categorias Perros</Text>
      <View style={styles.containerScroll}>
        {comidaData.map((item) => (
          <Pressable key={item.id} style={styles.cardContainer} onPress={ChangeProducts}>
            <Card price={item.price} image={item.image} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const Card = ({ price, image }) => (
  <View style={styles.card}>
    <Pressable style={styles.buttonCard}>
      <Image source={image} style={styles.cardImage} />
    </Pressable>
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
  title:{
    fontSize: 30,
    margin:10,
  },
  containerScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 10,
  },
  card: {
    width: '80%', // Adjusted to take full width of the container
    height: 250,
    marginVertical: 6,
    borderWidth: 5,
    borderColor: '#000',
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
