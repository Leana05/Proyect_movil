import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home.js';
import Login from './src/screens/Login.js';
import Program from './src/screens/Program.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* {/* <Login></Login> */}
      <Home></Home>
      {/* <Program></Program> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
