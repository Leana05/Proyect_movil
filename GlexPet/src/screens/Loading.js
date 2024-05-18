import { View, StyleSheet, ScrollView, ActivityIndicator, Image, Text } from 'react-native';

const Loading = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerLoad}>
      <View style={styles.containerImg}>
        <Image style={styles.logo} resizeMode='contain' source={require('../img/Logo.png')} />
      </View>
      <View style={styles.containerCarga}>
        <ActivityIndicator style={styles.activityIndicator} size='large' color='#8ca1d3' />
        <Text style={styles.loadingText}>Cargando</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLoad: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ee6df',
  },
  containerImg: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  containerCarga: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#8ca1d3',
  },
});

export default Loading;
