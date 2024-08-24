import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Pressable, Alert } from 'react-native';
import styles from '../styles/SupportStyle'; 

const Support = () => {
  const [requestType, setRequestType] = useState('Queja');
  const [description, setDescription] = useState('');

  const handleSend = () => {
    Alert.alert(
      '¡Enviado!',
      'Gracias por tu mensaje. si es una queja sobre el sistema lo solucionamos cuando aprendamos mas de react gracias :)',
      [{ text: 'OK' }]
    );

    console.log('Tipo de solicitud:', requestType);
    console.log('Descripción:', description);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Tipo de solicitud:</Text>
        <View style={styles.buttonContainer}>
          {['Queja', 'Petición', 'Recurso'].map((item) => (
            <Pressable
              key={item}
              style={[
                styles.button,
                requestType === item && styles.buttonSelected,
              ]}
              onPress={() => setRequestType(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Descripción de la solicitud:</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          placeholder="Descripción (máximo 300 caracteres)"
          multiline
          maxLength={300}
        />
      </View>

      <Button title="Enviar" onPress={handleSend} />
    </ScrollView>
  );
};

export default Support;