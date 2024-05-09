import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

const Loading = () => {
    
    return (
      <ScrollView contentContainerStyle={styleLoading.containerLoad}>
        <View>
          <ActivityIndicator style={styleLoading.ActyId} size='large' color='#8ca1d3' />
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
        justifyContent: 'center'
    },
    ActyId:{
        width:'100%'
    }
})

export default Loading;