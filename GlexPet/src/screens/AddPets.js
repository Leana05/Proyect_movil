import { ScrollView, View, StyleSheet, Text, Image, TextInput, Button} from "react-native";
import SelectInput from 'react-native-picker-select';


const AddPets = () => {

    const Especie = [
        { label: 'Canino', value: '0' },
        { label: 'Felino', value: '1' },
        { label: 'Ave', value: '2' },
        { label: 'Reptil', value: '3' },
    ];

    const Genero = [
        { label: 'Ciencia', value: 'ciencia' },
        { label: 'Cómic', value: 'comic' },
        { label: 'Educación', value: 'educacion' },
        { label: 'Historia', value: 'historicos' },
    ];

    return (
      <ScrollView contentContainerStyle={styleAddPets.containerPets}>
        <View style={styleAddPets.containerHead}>
          <View style={styleAddPets.containerImg}>
            <Image style={styleAddPets.logo} resizeMethod='auto' source={require('../img/Logo.png')} />
          </View>

          <View style={styleAddPets.Profile}>
            <Text>Nombre</Text>
            <TextInput placeholder='Ingrese el nombre la mascota' />

            <Text>Descripción</Text>
            <TextInput placeholder='Describa a su mascota(opcional)' />

            <Text>Fecha de Nacimiento</Text>
            <TextInput placeholder='Ingrese la fecha de nacimiento de la mascota' />
          </View>
        </View>

        <View style={styleAddPets.containerCmBox}>
          <View style={styleAddPets.comboBox}>
            <SelectInput
              style={styleAddPets.selectInput}
              onValueChange={(value) => console.log(value)}
              placeholder={{ label: 'Selecciona una especie', value: null }}
              items={Especie}
            />
          </View>

          <View style={styleAddPets.comboBox}>
            <SelectInput
              style={styleAddPets.selectInput}
              onValueChange={(value) => console.log(value)}
              placeholder={{ label: 'Selecciona un genero', value: null }}
              items={Genero}
            />
          </View>
        </View>

        <View style={styleAddPets.fitButton}>
          <Button onPress={() => console.log('Se Guardó')} title='Guardar' accessibilityLabel='Hola' color='#d676c1' />
          <Button onPress={() => console.log('Boton para ver mascotas')} color='#d676c1' disabled title='Ver Mascota' />
        </View>
      </ScrollView>
    );
}

const styleAddPets = StyleSheet.create({
  containerPets: {
    display: 'flex',
    backgroundColor: '#faffd8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    rowGap: 150
  },
  containerHead: {
    width:'100%',
    height:'30%',
    flexDirection: 'row',
    backgroundColor:'lime',
  },
  containerCmBox: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#8ca1d3',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10
  },
  comboBox: {
    height: 50,
    width: 200,
  },
  styleInput: {

  },
  containerImg: {
    width: 50,
    height: 50,
  },
  fitButton: {
    borderRadius: 70,
  },
  containerImg: {
    display: 'flex',
  },
  logo: {
    width: 200,
    height: '100%',
    backgroundColor:'red',
  },
  Profile:{
    width:'30%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20
  },
});


export default AddPets