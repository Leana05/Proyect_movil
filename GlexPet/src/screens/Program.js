import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Program = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleSubmit = () => {
    Alert.alert(
      'Cita Agendada',
      `Nombre: ${name}\nCédula: ${id}\nFecha: ${date.toLocaleDateString()}\nHora: ${time.toLocaleTimeString()}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agendar Cita</Text>
      </View>

      <View style={styles.conQuotes}>
        <TextInput style={styles.input} placeholder='Nombre' value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder='Cédula' value={id} onChangeText={setId} />
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
          <Text>{time.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showDatePicker && <DateTimePicker value={date} mode='date' display='default' onChange={handleDateChange} />}
        {showTimePicker && <DateTimePicker value={time} mode='time' display='default' onChange={handleTimeChange} />}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Agregar Cita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Program;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAFFD8',
  },
  header: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#D676D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  conQuotes: {
    width: '100%',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#D676C1',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
