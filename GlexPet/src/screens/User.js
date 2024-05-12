import { View, Text, ScrollView} from 'react-native'
import React from 'react'

const User = () => {
    return (
        <ScrollView contentContainerStyle={stylesUser.container}>
            <View>
                <Text>User</Text>
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
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFFD8',
        padding: 10,
    },
})