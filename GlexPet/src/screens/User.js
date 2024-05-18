import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = () => {
    return (
        <ScrollView contentContainerStyle={stylesUser.container}>
            <View style={stylesUser.decorative1}></View>
            <View style={stylesUser.decorative2}></View>

            <View style={stylesUser.data_container}>
                <View style={stylesUser.center}>
                    <View style={stylesUser.photo}>
                        <Icon name="camera-alt" size={50} color="#000" />
                    </View>
                    <View style={stylesUser.textContainer}>
                        <Text style={stylesUser.textN}>Nombre</Text>
                        <Text style={stylesUser.textNN}>Correo</Text>
                    </View>
                </View>
                <Text style={stylesUser.title}>Mascotas</Text>
                <View style={stylesUser.viewPets}>
                    <View style={stylesUser.petsIcons}>
                        <View style={stylesUser.photo2}>
                            <Icon name="add" size={50} color="#000" />
                        </View>
                        <View style={stylesUser.photo2}>
                            <Icon name="camera-alt" size={50} color="#000" />
                        </View>
                    </View>
                </View>
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

    data_container: {
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

    photo: {
        width: 100,
        height: 100,
        backgroundColor: '#9EE6DF',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    photo2: {
        width: 70,
        height: 70,
        backgroundColor: 'blue',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },

    center: {
        width: '90%',
        height: '20%',
        backgroundColor: 'red',
        marginTop: 0,
        alignItems: 'center',
    },

    textContainer: {
            marginTop: 5, // Ajusta el valor según sea necesario para el espacio deseado
            alignItems: 'center',
        },

    viewPets: {
        width: '90%',
        height: '20%',
        backgroundColor: 'red',
        marginTop: -10,
        alignItems: 'flex-start',
    },

    textN: {
        fontSize: 23,
        fontWeight: 'bold',
    },

    textNN: {
        fontSize: 23,
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },

    petsIcons: {
        flexDirection: 'row',
    },
})


// import { View, Text, ScrollView, StyleSheet} from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const User = () => {
//     return (
//         <ScrollView contentContainerStyle={stylesUser.container}>
//             <View style={stylesUser.decorative1}></View>
//             <View style={stylesUser.decorative2}></View>

//             <View style={stylesUser.data_container}>
//                 <View style={stylesUser.center}>
//                     <View style={stylesUser.photo}>
//                         <Icon name="camera-alt" size={50} color="#000" />
//                     </View>
//                     <View style={stylesUser.textContainer}>
//                         <Text style={stylesUser.textN}>Nombre</Text>
//                         <Text style={stylesUser.textNN}>Correo</Text>
//                     </View>
//                 </View>
//                 <View style={stylesUser.viewPets}>
//                     <View>
//                         <Text style={stylesUser.textN}>Mascotas</Text>
//                     </View>
//                     <View style={stylesUser.photo2}>
//                         <Icon name="add" size={50} color="#000" />
//                     </View>
//                     <View style={stylesUser.photo2}>
//                         <Icon name="camera-alt" size={50} color="#000" />
//                     </View>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// export default User

// const stylesUser = StyleSheet.create({
//     container: {
//         display: 'flex',
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#FAFFD8',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 10,
//     },

//     data_container:{
//         width: '90%',
//         height: '90%',
//         borderWidth: 1,
//         borderColor: '#D676C1',
//         backgroundColor: 'rgba(214, 118, 192, 0.2)',
//         alignItems: 'center',
//         marginTop: 50,
//     },

//     decorative1: {
//         position: 'absolute',
//         width: '110%',
//         height: 70,
//         backgroundColor: '#D676C1',
//         top: 0,
//     },

//     decorative2: {
//         position: 'absolute',
//         width: '100%',
//         height: 5,
//         backgroundColor: '#9EE6DF',
//         top: 60,
//     },

//     photo: {
//         position: 'absolute',
//         width: 100,
//         height: 100,
//         backgroundColor: '#9EE6DF',
//         borderRadius: 200,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     photo2: {
//         position: 'absolute',
//         width: 70,
//         height: 70,
//         backgroundColor: 'blue',
//         borderRadius: 200,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: 5,
//         marginTop: 30,
//     },

//     center: {
//         width: '90%',
//         height: '20%',
//         backgroundColor: 'red',
//         marginTop: 0,
//         alignItems: 'center',
//     },

//     textContainer: {
//         marginTop: 100, // Ajusta el valor según sea necesario para el espacio deseado
//         alignItems: 'center',
//     },

//     viewPets: {
//         width: '90%',
//         height: '20%',
//         backgroundColor: 'red',
//         marginTop: -2,
//         alignItems: 'flex-start',
//     },

//     textN: {
//         fontSize: 23,
//         fontWeight: 'bold',
//         marginBottom: -10,
//     },

//     textNN:{
//         fontSize: 23,
//     },
    
//     petsIcons: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// })