import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AddPets from './src/screens/AddPets.js'

export default function App() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden={true}/>
      <AddPets></AddPets>
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
    padding: 5
  },
});
