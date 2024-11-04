import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/OffersStyle';

const OfferItem = ({ offer }) => {
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
  };
  
  function numFormat(num) {
    let array = num.toFixed(2).split('.');
    array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return array.join(',');
  }

  return (
    <View style={styles.offerItem}>
      <Image source={{ uri: offer.image }} style={styles.offerImage} />
      <View style={styles.offerInfo}>
        <Text style={styles.offerName}>{offer.name}</Text>
        <Text style={styles.offerDescription}>{offer.description}</Text>
        <Text style={styles.offerPrice}>
          Precio: ${numFormat(calculateDiscountedPrice(offer.price, offer.discount))}
        </Text>
        <Text style={styles.originalPrice}>Antes: ${numFormat(offer.price)}</Text>
        <Text style={styles.discountLabel}>-{offer.discount}% OFF</Text>
      </View>
    </View>
  );
};

export default OfferItem;
