import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ProfileStyle';

const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{card}</Text>
        </View>
      ))}
    </>
  );
};

export default CardList;
