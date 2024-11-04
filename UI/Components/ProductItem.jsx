import React, {useContext} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/FavoritesStyle'; 
import { deleteHeart } from '../database/firestore';
import { UserContext } from '../context/UserContext';
import auth from '@react-native-firebase/auth';

const ProductItem = ({ product, navigation }) => {
  function detailItemFunction(id ,price, features) {
    navigation.navigate('ItemDetail', {
        id: id,
        price: price,
        features: features,
    });
  }

  return (
      <View key={product.id} style={styles.productContainer}>
        <Pressable onPress={()=>{
          detailItemFunction(product.id, product.price, product.features)
        }}>
          <Image source={{ uri: product.image,  cache: 'force-cache' }} style={styles.image} />
        </Pressable>
        <Pressable style={styles.infoContainer} onPress={()=>{
          detailItemFunction(product.id, product.price, product.features)
        }}>
          <View style={styles.titleContainer}>
            <Pressable onPress={()=>{
              deleteHeart(product.id,auth().currentUser.uid);
            }}>
              <Icon name="heart" size={20} color="red" />
            </Pressable>
            <Text style={styles.description}>{product.name}</Text>
          </View>
        </Pressable>
      </View>
  );
};

export default ProductItem;