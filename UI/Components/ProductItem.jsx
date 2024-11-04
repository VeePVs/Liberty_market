import React, {useContext} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/FavoritesStyle'; 
import { deleteHeart } from '../database/firestore';
import { UserContext } from '../context/UserContext';

const ProductItem = ({ product }) => {
  const {userUID} = useContext(UserContext);

  return (
    <View key={product.id} style={styles.productContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Pressable onPress={()=>{
            deleteHeart(product.id,userUID)
          }}>
            <Icon name="heart" size={20} color="red" />
          </Pressable>
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