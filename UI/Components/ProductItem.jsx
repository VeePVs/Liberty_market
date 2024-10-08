import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/FavoritesStyle'; 

const ProductItem = ({ product }) => {
  return (
    <View key={product.id} style={styles.productContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Icon name="heart" size={20} color="red" />
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={[styles.status, product.status === 'Disponible' ? styles.available : styles.unavailable]}>
            {product.status}
          </Text>
          {product.status === 'Disponible' && (
            <Icon name="shopping-cart" size={20} color="black" style={styles.cartIcon} />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
