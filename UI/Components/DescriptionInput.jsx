import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../styles/SupportStyle';

const DescriptionInput = ({ description, setDescription }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Descripción de la solicitud:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción (máximo 300 caracteres)"
        placeholderTextColor={"#002"}
        multiline
        maxLength={300}
      />
    </View>
  );
};

export default DescriptionInput;
