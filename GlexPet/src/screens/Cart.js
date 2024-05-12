import { ScrollView, StyleSheet, View, Image, Text, TextInput, VirtualizedList, SafeAreaView } from "react-native"


const Cart = () =>{
    return (
        <View>
            <View style={{padding:1}}>
                <ScrollView contentContainerStyle={styleCart.containerAll} >
                    <View style={styleCart.cardProduct}>
                    <View style={styleCart.containerImg}>
                        <Image
                        style={styleCart.img}
                        height={200}
                        width={200}
                        resizeMode='contain'
                        borderRadius={25}
                        backgroundColor={'#9ee6df'}
                        source={require('../img/Logo.png')}
                        />
                    </View>

                    <View style={styleCart.containerInfo}>
                        <Text>PRODUCTO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>CANTIDAD</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>PRECIO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                    </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                    <View style={styleCart.containerImg}>
                        <Image
                        style={styleCart.img}
                        height={200}
                        width={200}
                        resizeMode='contain'
                        borderRadius={25}
                        backgroundColor={'#9ee6df'}
                        source={require('../img/Logo.png')}
                        />
                    </View>

                    <View style={styleCart.containerInfo}>
                        <Text>PRODUCTO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>CANTIDAD</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>PRECIO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                    </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                    <View style={styleCart.containerImg}>
                        <Image
                        style={styleCart.img}
                        height={200}
                        width={200}
                        resizeMode='contain'
                        borderRadius={25}
                        backgroundColor={'#9ee6df'}
                        source={require('../img/Logo.png')}
                        />
                    </View>

                    <View style={styleCart.containerInfo}>
                        <Text>PRODUCTO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>CANTIDAD</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>PRECIO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                    </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                    <View style={styleCart.containerImg}>
                        <Image
                        style={styleCart.img}
                        height={200}
                        width={200}
                        resizeMode='contain'
                        borderRadius={25}
                        backgroundColor={'#9ee6df'}
                        source={require('../img/Logo.png')}
                        />
                    </View>

                    <View style={styleCart.containerInfo}>
                        <Text>PRODUCTO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>CANTIDAD</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                        <Text>PRECIO</Text>
                        <TextInput readOnly={true} backgroundColor='#9ee6df' borderRadius={15}></TextInput>
                    </View>
                    </View>
                </ScrollView>
            </View>

            <Text style={styleCart.total}>
            Valor total a pagar:<TextInput>$10000</TextInput>
            </Text>
        </View>
    );
}

const styleCart = StyleSheet.create({
    containerAll:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        rowGap: 10,
    },
    cardProduct:{
        backgroundColor:'#8ca1d3',
        width:'100%',
        height:'30%',
        borderWidth: 2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        Gap:10,
    },
    containerImg:{
        display:'flex',
        flexDirection:'column',
        borderWidth:1,
        height:'100%',
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        objectFit:'contain',
        width:'100%',
        height:'100%',
    },
    containerInfo:{
        borderWidth:1,
        display:'flex',
        flexDirection:'column',
        width:'50%',
        height:'100%',
        justifyContent:'center',
        rowGap:10
    },
    text:{
        fontWeight:"semibold"
    },
    textInput:{

    },
    total:{
        fontSize:20,
        fontWeight:"bold"
    }

})

export default Cart;