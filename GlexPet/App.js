import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home.js';
import Login from './src/screens/Login.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login></Login> */}
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
