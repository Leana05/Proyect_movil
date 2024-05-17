import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

const Program = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
    </View>
  );
}

export default Program

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAFFD8',
    padding: 10,
  },

});
