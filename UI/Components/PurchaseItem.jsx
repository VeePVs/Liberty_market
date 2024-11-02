import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/MyPurchasesStyle';

const PurchaseItem = ({ purchase }) => {

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Entregado':
        return <Icon name="check-circle" size={20} color="green" />;
      case 'En tránsito':
        return <Icon name="hourglass-empty" size={20} color="orange" />;
      case 'Cancelado':
        return <Icon name="cancel" size={20} color="red" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.item}>
      <Image source={{ uri: purchase.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.description}>{purchase.description}</Text>
        <View style={styles.statusContainer}>
          {getStatusIcon(purchase.status)}
          <Text style={[styles.status, { marginLeft: 8 }]}>{purchase.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default PurchaseItem;
