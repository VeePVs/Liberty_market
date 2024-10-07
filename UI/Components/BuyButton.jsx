import { View, Text, Pressable } from 'react-native';
import React from 'react'
import styles from '../../styles/BuyButton';

const BuyButton = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>Añadir al carrito</Text>
    </Pressable>
  )
}

export default BuyButton;
