import { ScrollView, StyleSheet, View, Image, Text, TextInput } from "react-native"


const Cart = () =>{
    return(
        <ScrollView styles={styleCart.containerAll}>
            <View style={styleCart.Product}>
                <View>
                    <Image />
                </View>

                <View>
                    <Text>Producto</Text>
                    <TextInput></TextInput>
                    <Text>Cantidad</Text>
                    <TextInput></TextInput>
                    <Text>Precio</Text>
                    <TextInput></TextInput>
                </View>
            </View>
        </ScrollView>
    )
}

const styleCart = StyleSheet.create({
    containerAll:{

    },
    Product:{

    }
})

export default Cart;