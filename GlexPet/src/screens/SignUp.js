import React from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';

const SignUp = () => {
    return (
        <View style={stylesSignUp.container}>
            <View style={stylesSignUp.orangeCircleTopLeft} />
            <View style={stylesSignUp.orangeCircleTopLeft1} />
            <View style={stylesSignUp.orangeCircleTopLeft2} />

            <View style={stylesSignUp.orangeCircleBottomRight} />
            <View style={stylesSignUp.orangeCircleBottomRight1} />
            <View style={stylesSignUp.orangeCircleBottomRight2} />

            <View style={stylesSignUp.data_container}>
                <Text>Registro</Text>
                <TextInput style={stylesSignUp.input} keyboardType='numeric' placeholder='Id'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Nombre'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Apellido'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Fecha de nacimiento'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Dirección'></TextInput>
                <TextInput style={stylesSignUp.input} keyboardType='numeric' placeholder='Celular'></TextInput>
                <Text>Usuario</Text>
                <TextInput style={stylesSignUp.input} placeholder='Correo'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Contraseña'></TextInput>
                <TextInput style={stylesSignUp.input} placeholder='Confirmar Contraseña'></TextInput>
            </View>
            
        </View>
    );
    
};

export default SignUp

const stylesSignUp = StyleSheet.create({
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
    data_container: {
        width: '80%',
        height: '70%',
        borderWidth: 1,
        borderColor: '#D676C1',
        backgroundColor: 'rgba(214, 118, 192, 0.2)',
        alignItems: 'center',
        top: 12,
    },
    input: {
        height: 35,
        fontSize: 20,
        width: '80%',
        padding: 5,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FAFFD8',
        borderRadius: 5,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    orangeCircleTopLeft: {
        position: 'absolute',
        top: -150,
        left: -60,
        width: 250,
        height: 250,
        backgroundColor: '#8CA1D3',
        borderRadius: 200,
    },
    orangeCircleTopLeft1: {
        position: 'absolute',
        top: -250,
        left: 10,
        width: 300,
        height: 300,
        backgroundColor: '#9EE6DF',
        borderRadius: 200,
    },
    orangeCircleTopLeft2: {
        position: 'absolute',
        top: 10,
        left: -70,
        width: 150,
        height: 150,
        backgroundColor: '#9EE6DF',
        borderRadius: 200,
    },
    orangeCircleBottomRight: {
        position: 'absolute',
        bottom: -150,
        right: -50,
        width: 250,
        height: 250,
        backgroundColor: '#8CA1D3',
        borderRadius: 200,
    },
    orangeCircleBottomRight1: {
        position: 'absolute',
        bottom: -250,
        right: 80,
        width: 300,
        height: 300,
        backgroundColor: '#9EE6DF',
        borderRadius: 150,
    },
    orangeCircleBottomRight2: {
        position: 'absolute',
        bottom: -130,
        left: -25,
        width: 150,
        height: 150,
        backgroundColor: '#8CA1D3',
        borderRadius: 150,
    },
})