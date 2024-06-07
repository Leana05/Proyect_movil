// export default Cart;
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const products = [
  { id: '1', name: 'PRODUCTO 1', quantity: '1', price: '$1000' },
  { id: '2', name: 'PRODUCTO 2', quantity: '2', price: '$2000' },
  { id: '3', name: 'PRODUCTO 3', quantity: '3', price: '$3000' },
  { id: '4', name: 'PRODUCTO 4', quantity: '4', price: '$4000' },
];

const Cart = ({navigation}) => {
  const ChangePay = () => {
    navigation.navigate('Pay');
  };
  return (
    <SafeAreaView style={styleCart.containerAll}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styleCart.containerScroll}
        renderItem={({ item }) => (
          <View style={styleCart.cardProduct}>
            <View style={styleCart.containerImg}>
              <Image style={styleCart.img} source={require('../img/Logo.png')} resizeMode='contain' />
            </View>
            <View style={styleCart.containerInfo}>
              <Text style={styleCart.text}>{item.name}</Text>
              <Text style={styleCart.text}>CANTIDAD</Text>
              <TextInput editable={false} style={styleCart.textInput} value={item.quantity} />
              <Text style={styleCart.text}>PRECIO</Text>
              <TextInput editable={false} style={styleCart.textInput} value={item.price} />
            </View>
            <TouchableOpacity style={styleCart.TrashButton}>
              <FontAwesome name='trash' size={27} color='black' />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styleCart.containerTotal}>
        <Text style={styleCart.total}>
          Valor total a pagar: <TextInput editable={false} value='$10000' style={styleCart.textInput} />
        </Text>
      </View>
      <TouchableOpacity style={styleCart.purchaseButton} onPress={ChangePay}>
        <Text style={styleCart.purchaseButtonText}>Comprar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styleCart = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#faffd8',
    paddingTop: 30,
  },
  containerScroll: {
    alignItems: 'center',
    paddingVertical: '2%',
  },
  cardProduct: {
    backgroundColor: '#8ca1d3',
    width: '90%',
    marginVertical: 10,
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
  textInput: {
    backgroundColor: '#9ee6df',
    borderRadius: 4,
    fontSize: 16,
    padding: 5,
    marginBottom: 10,
  },
  TrashButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerTotal: {
    borderWidth: 2,
    borderColor: '#d676c1',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButton: {
    backgroundColor: '#d676c1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
// import { FontAwesome } from '@expo/vector-icons';
// import React, { useEffect, useState } from 'react';

// import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const products = [
//   { id: '1', name: 'PRODUCTO 1', quantity: '1', price: '$1000' },
//   { id: '2', name: 'PRODUCTO 2', quantity: '2', price: '$2000' },
//   { id: '3', name: 'PRODUCTO 3', quantity: '3', price: '$3000' },
//   { id: '4', name: 'PRODUCTO 4', quantity: '4', price: '$4000' },
// ];

// const Cart = ({ navigation }) => {
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     // Calcular el total sumando los precios
//     const totalSum = products.reduce((sum, product) => {
//       const priceNumber = parseFloat(product.price.replace('$', ''));
//       return sum + priceNumber;
//     }, 0);
//     setTotal(totalSum);
//   }, []);

//   const ChangePay = () => {
//     navigation.navigate('Pay');
//   };

//   return (
//     <SafeAreaView style={styleCart.containerAll}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styleCart.containerScroll}
//         renderItem={({ item }) => (
//           <View style={styleCart.cardProduct}>
//             <View style={styleCart.containerImg}>
//               <Image style={styleCart.img} source={require('../img/Logo.png')} resizeMode='contain' />
//             </View>
//             <View style={styleCart.containerInfo}>
//               <Text style={styleCart.text}>{item.name}</Text>
//               <Text style={styleCart.text}>CANTIDAD</Text>
//               <TextInput editable={false} style={styleCart.textInput} value={item.quantity} />
//               <Text style={styleCart.text}>PRECIO</Text>
//               <TextInput editable={false} style={styleCart.textInput} value={item.price} />
//             </View>
//             <TouchableOpacity style={styleCart.TrashButton}>
//               <FontAwesome name='trash' size={27} color='black' />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//       <View style={styleCart.containerTotal}>
//         <Text style={styleCart.total}>Valor total a pagar:</Text>
//         <View style={styleCart.valorpagar}>
//           <TextInput editable={false} value={`$${total}`} style={styleCart.total} />
//         </View>
//       </View>
//       <TouchableOpacity style={styleCart.purchaseButton} onPress={ChangePay}>
//         <Text style={styleCart.purchaseButtonText}>Comprar</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styleCart = StyleSheet.create({
//   containerAll: {
//     flex: 1,
//     backgroundColor: '#faffd8',
//     paddingTop: 30,
//   },
//   containerScroll: {
//     alignItems: 'center',
//     paddingVertical: '2%',
//   },
//   cardProduct: {
//     backgroundColor: '#8ca1d3',
//     width: '90%',
//     marginVertical: 10,
//     borderWidth: 2,
//     borderRadius: 20,
//     borderColor: '#d676c1',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   containerImg: {
//     width: '40%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   img: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//   },
//   containerInfo: {
//     width: '60%',
//     paddingLeft: 10,
//   },
//   text: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   textInput: {
//     backgroundColor: '#9ee6df',
//     borderRadius: 4,
//     fontSize: 16,
//     padding: 5,
//     marginBottom: 10,
//   },
//   TrashButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   total: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   containerTotal: {
//     borderWidth: 2,
//     borderColor: '#d676c1',
//     flexDirection: 'row',
//     width: '100%',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   valorpagar: {
//     marginLeft: 10,
//     backgroundColor: '#d676c6',
//   },
//   purchaseButton: {
//     backgroundColor: '#d676c1',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     margin: 20,
//   },
//   purchaseButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Cart;
