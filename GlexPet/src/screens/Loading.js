import { View, StyleSheet, ScrollView, ActivityIndicator,Image, Text } from "react-native";

const Loading = () => {
    
    return (
      <ScrollView contentContainerStyle={styleLoading.containerLoad}>
        <View style={styleLoading.containerImg}>
          <Image style={styleLoading.logo} resizeMethod='resize' source={require('../img/Logo.png')} />
        </View>
        <View style={styleLoading.containerCarga}>
          <ActivityIndicator style={styleLoading.ActyId} size='large' color='#8ca1d3' />
          <Text>Cargando</Text>
        </View>
      </ScrollView>
    );
}

const styleLoading = StyleSheet.create({
    containerLoad:{
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ee6df'
    },
    containerCarga:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
    ActyId:{
        width:'100%'
    }
})

export default Loading;