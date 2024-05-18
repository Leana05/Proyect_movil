import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const products = [
    { id: '1', name: 'PRODUCTO 1', quantity: '1', price: '$1000' },
    { id: '2', name: 'PRODUCTO 2', quantity: '2', price: '$2000' },
    { id: '3', name: 'PRODUCTO 3', quantity: '3', price: '$3000' },
    { id: '4', name: 'PRODUCTO 4', quantity: '4', price: '$4000' },
];

const Catalog = () => {
    const renderItem = ({ item }) => (
        <View style={styleCatalog.cardProduct}>
            <View style={styleCatalog.containerImg}>
                <Image style={styleCatalog.img} source={require('../img/Logo.png')} resizeMode='contain' />
            </View>
            <View style={styleCatalog.containerInfo}>
                <Text style={styleCatalog.text}>{item.name}</Text>
                <Text style={styleCatalog.text}>PRECIO: {item.price}</Text>
                <TouchableOpacity onPress={() => { }} style={styleCatalog.addToCartButton}>
                    <Text style={styleCatalog.addToCartButtonText}>Añadir al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styleCatalog.containerAll}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styleCatalog.containerScroll}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const styleCatalog = StyleSheet.create({
    containerAll: {
        flex: 1,
        backgroundColor: '#faffd8',
    },
    containerScroll: {
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingTop: '2%',
    },
    cardProduct: {
        backgroundColor: '#8ca1d3',
        width: '48%',
        marginHorizontal: '1%',
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#d676c1',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    containerImg: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    containerInfo: {
        width: '60%',
        paddingLeft: 10,
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    addToCartButton: {
        backgroundColor: '#9ee6df',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 10,
    },
    addToCartButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Catalog;
