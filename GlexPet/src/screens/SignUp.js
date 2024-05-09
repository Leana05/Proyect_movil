import React from 'react';
import { StyleSheet, View } from 'react-native';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.orangeCircleTopLeft} />
            <View style={styles.orangeCircleTopLeft1} />
            <View style={styles.orangeCircleTopLeft2} />

            <View style={styles.orangeCircleBottomRight} />
            <View style={styles.orangeCircleBottomRight1} />
            <View style={styles.orangeCircleBottomRight2} />

            
        </View>
    );
};

export default SignUp

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFFD8',
        padding: 10,
    },
    orangeCircleTopLeft: {
        position: 'absolute',
        top: -150,
        left: -60,
        width: 250,
        height: 250,
        backgroundColor: '#D676C1',
        borderRadius: 200,
    },
    orangeCircleTopLeft1: {
        position: 'absolute',
        top: -250,
        left: 10,
        width: 300,
        height: 300,
        backgroundColor: '#D676C1',
        borderRadius: 200,
    },
    orangeCircleTopLeft2: {
        position: 'absolute',
        top: 10,
        left: -70,
        width: 150,
        height: 150,
        backgroundColor: '#D676C1',
        borderRadius: 200,
    },
    orangeCircleBottomRight: {
        position: 'absolute',
        bottom: -150,
        right: -50,
        width: 250,
        height: 250,
        backgroundColor: '#D676C1',
        borderRadius: 200,
    },
    orangeCircleBottomRight1: {
        position: 'absolute',
        bottom: -250,
        right: 80,
        width: 300,
        height: 300,
        backgroundColor: '#D676C1',
        borderRadius: 150,
    },
    orangeCircleBottomRight2: {
        position: 'absolute',
        bottom: -130,
        left: -25,
        width: 150,
        height: 150,
        backgroundColor: '#D676C1',
        borderRadius: 150,
    },
})