import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AddPets from './src/screens/AddPets.js';
import Loading from './src/screens/Loading.js';
import Cart from './src/screens/Cart.js'

export default function App() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Cart></Cart>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#faffd8',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical:20
  },
});
