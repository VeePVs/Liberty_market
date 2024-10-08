import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/OffersStyle';

const OfferItem = ({ offer }) => {
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
  };

  return (
    <View style={styles.offerItem}>
      <Image source={{ uri: offer.image }} style={styles.offerImage} />
      <View style={styles.offerInfo}>
        <Text style={styles.offerName}>{offer.name}</Text>
        <Text style={styles.offerDescription}>{offer.description}</Text>
        <Text style={styles.offerPrice}>
          Precio: ${calculateDiscountedPrice(offer.price, offer.discount).toFixed(2)}
        </Text>
        <Text style={styles.originalPrice}>Antes: ${offer.price.toFixed(2)}</Text>
        <Text style={styles.discountLabel}>-{offer.discount}% OFF</Text>
      </View>
    </View>
  );
};

export default OfferItem;
