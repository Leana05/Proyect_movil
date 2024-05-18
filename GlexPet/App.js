import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/screens/SignUp.js'
import User from './src/screens/User.js'
import Products from './src/screens/Products.js'

export default function App() {
  return (
    <View style={styles.container}>

      {/* <User></User> */}
      {/* <SignUp></SignUp> */}
      <Products></Products>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});
