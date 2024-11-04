import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import OfferItem from './Components/OfferItem';
import styles from '../styles/OffersStyle';
import { getOffers } from './database/firestore';

const Offers = ({navigation}) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
          await getOffers(setOffers);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchOffers();
  }, [offers]);

  function detailItemFunction(id ,price, features) {
    navigation.navigate('ItemDetail', {
        id: id,
        price: price,
        features: features,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ofertas Especiales</Text>
      <View style={styles.offersContainer}>
        {offers.map((offer) => (
          <Pressable key={offer.id} onPress={()=> {
            detailItemFunction(offer.id, offer.price, offer. features)
          }}>
            <OfferItem offer={offer} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Offers;
