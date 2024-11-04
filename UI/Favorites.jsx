import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text} from 'react-native';
import ProductItem from './Components/ProductItem';
import styles from '../styles/FavoritesStyle';
import { UserContext } from './context/UserContext';
import { getFavoriteProducts } from './database/firestore';

const FavoritesScreen = () => {
  const { userUID } = useContext(UserContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        await getFavoriteProducts(userUID, setFavoriteProducts);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavorites();
  }, [userUID,favoriteProducts]);

  return (
    <ScrollView style={styles.container}>
      {favoriteProducts.length !== 0 ? 
      favoriteProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      )) :
        (<Text style={styles.noFav}>No tienes productos en favoritos</Text>)
      }
    </ScrollView>
  );
};

export default FavoritesScreen;