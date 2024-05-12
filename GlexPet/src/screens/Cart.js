import { ScrollView, StyleSheet, View, Image, Text, TextInput, VirtualizedList, SafeAreaView } from "react-native"


const Cart = () =>{
    return (
        <View style={styleCart.containerAll}>
            <View style={styleCart.containerScrollView}>
                <ScrollView contentContainerStyle={styleCart.containerScroll} >
                    <View style={styleCart.cardProduct}>
                        <View style={styleCart.containerImg}>
                            <Image
                            style={styleCart.img}
                            height={200}
                            width={200}
                            resizeMode='contain'
                            borderRadius={10}
                            backgroundColor={'#9ee6df'}
                            source={require('../img/Logo.png')}
                            />
                        </View>

                        <View style={styleCart.containerInfo}>
                            <Text style={styleCart.text}>PRODUCTO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>CANTIDAD</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>PRECIO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                        </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                        <View style={styleCart.containerImg}>
                            <Image
                            style={styleCart.img}
                            height={200}
                            width={200}
                            resizeMode='contain'
                            borderRadius={10}
                            backgroundColor={'#9ee6df'}
                            source={require('../img/Logo.png')}
                            />
                        </View>

                        <View style={styleCart.containerInfo}>
                            <Text style={styleCart.text}>PRODUCTO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>CANTIDAD</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>PRECIO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                        </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                        <View style={styleCart.containerImg}>
                            <Image
                            style={styleCart.img}
                            height={200}
                            width={200}
                            resizeMode='contain'
                            borderRadius={10}
                            backgroundColor={'#9ee6df'}
                            source={require('../img/Logo.png')}
                            />
                        </View>

                        <View style={styleCart.containerInfo}>
                            <Text style={styleCart.text}>PRODUCTO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>CANTIDAD</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>PRECIO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                        </View>
                    </View>

                    <View style={styleCart.cardProduct}>
                        <View style={styleCart.containerImg}>
                            <Image
                            style={styleCart.img}
                            height={200}
                            width={200}
                            resizeMode='contain'
                            borderRadius={10}
                            backgroundColor={'#9ee6df'}
                            source={require('../img/Logo.png')}
                            />
                        </View>

                        <View style={styleCart.containerInfo}>
                            <Text style={styleCart.text}>PRODUCTO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>CANTIDAD</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                            <Text style={styleCart.text}>PRECIO</Text>
                            <TextInput editable={false} style={styleCart.textInput}></TextInput>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styleCart.containerTotal}> 
                <Text style={styleCart.total}>
                Valor total a pagar:<TextInput>$10000</TextInput>
                </Text>
            </View>
        </View>
    );
}

const styleCart = StyleSheet.create({
    containerAll:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',

    },
    containerScrollView:{
        height:'90%', 
        alignItems:'center', 
        paddingVertical:'10%'
    },
    containerScroll:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        rowGap: 5,
    },
    cardProduct:{
        backgroundColor:'#8ca1d3',
        width:'100%',
        height:'30%',
        borderWidth: 2,
        borderRadius:20,
        borderColor:'#d676c1',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        Gap:10,
    },
    containerImg:{
        display:'flex',
        flexDirection:'column',
        borderWidth:0,
        height:'95%',
        width:'45%',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        objectFit:'contain',
        width:'100%',
        height:'100%',
    },
    containerInfo:{
        borderWidth:0,
        display:'flex',
        flexDirection:'column',
        width:'50%',
        height:'100%',
        justifyContent:'center',
        rowGap:10,
        paddingHorizontal:10
    },
    text:{
        fontWeight:"bold",
        paddingLeft:'30%'
    },
    textInput:{
        readOnly:true,
        backgroundColor:'#9ee6df',
        borderRadius:4,
        fontSize:20,

    },
    total:{
        fontSize:20,
        fontWeight:"bold",
        textTransform:'capitalize',
    },
    containerTotal:{
        borderWidth:2,
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Cart;