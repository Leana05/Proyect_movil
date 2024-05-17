import { View, Text, ScrollView, StyleSheet} from 'react-native'
import React from 'react'

const User = () => {
    return (
        <ScrollView contentContainerStyle={stylesUser.container}>
            <View style={stylesUser.decorative1}></View>
            <View style={stylesUser.decorative2}></View>

            <View style={stylesUser.data_container}>
                <View><Text>Foto</Text></View>
            </View>
        </ScrollView>
    )
}

export default User

const stylesUser = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#FAFFD8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    data_container:{
        width: '90%',
        height: '90%',
        borderWidth: 1,
        borderColor: '#D676C1',
        backgroundColor: 'rgba(214, 118, 192, 0.2)',
        alignItems: 'center',
        marginTop: 50,
    },

    decorative1: {
        position: 'absolute',
        width: '110%',
        height: 70,
        backgroundColor: '#D676C1',
        top: 0,
    },

    decorative2: {
        position: 'absolute',
        width: '100%',
        height: 5,
        backgroundColor: '#9EE6DF',
        top: 60,
    },
})