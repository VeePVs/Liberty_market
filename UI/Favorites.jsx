import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text} from 'react-native';
import ProductItem from './Components/ProductItem';
import styles from '../styles/FavoritesStyle';
import { UserContext } from './context/UserContext';
import { getFavoriteProducts } from './database/firestore';
import auth from '@react-native-firebase/auth';

const FavoritesScreen = ({navigation}) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          await getFavoriteProducts(user.uid, setFavoriteProducts);
        }
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavorites();
  }, [favoriteProducts]);

  return (
    <ScrollView style={styles.container}>
      {favoriteProducts.length !== 0 ? 
      favoriteProducts.map((product) => (
        <ProductItem key={product.id} product={product} navigation={navigation}/>
      )) :
        (<Text style={styles.noFav}>No tienes productos en favoritos</Text>)
      }
    </ScrollView>
  );
};

export default FavoritesScreen;