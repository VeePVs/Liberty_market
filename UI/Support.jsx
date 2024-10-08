import React, { useState, useEffect } from 'react';
import { ScrollView, Button, Alert } from 'react-native';
import RequestTypeButtons from './Components/RequestTypeButtons';
import DescriptionInput from './Components/DescriptionInput';
import styles from '../styles/SupportStyle'; 

const Support = () => {
  const [requestType, setRequestType] = useState('Queja');
  const [description, setDescription] = useState('');

  
  useEffect(() => {
    if (description.length > 250) {
      Alert.alert(
        'Advertencia',
        'La descripción está por alcanzar el límite de 300 caracteres.',
        [{ text: 'OK' }]
      );
    }
  }, [description]);

  const handleSend = () => {
    Alert.alert(
      '¡Enviado!',
      'Gracias por tu mensaje. Si es una queja sobre el sistema lo solucionamos cuando aprendamos más de React :)',
      [{ text: 'OK' }]
    );

    console.log('Tipo de solicitud:', requestType);
    console.log('Descripción:', description);
  };

  return (
    <ScrollView style={styles.container}>
      <RequestTypeButtons 
        requestType={requestType} 
        setRequestType={setRequestType} 
      />

      <DescriptionInput 
        description={description} 
        setDescription={setDescription} 
      />

      <Button title="Enviar" onPress={handleSend} />
    </ScrollView>
  );
};

export default Support;
