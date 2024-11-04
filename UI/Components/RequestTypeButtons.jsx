import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/SupportStyle'; 

const RequestTypeButtons = ({ requestType, setRequestType, setDescription }) => {
  return (
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
            onPress={() => {
              setRequestType(item);
              setDescription('');
            }}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default RequestTypeButtons;
