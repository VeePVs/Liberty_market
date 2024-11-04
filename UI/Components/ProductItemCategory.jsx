import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/CategoriesStyle';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: product.image, cache: 'force-cache' }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
