import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from '../styles/OffersStyle';

const Offers = () => {
  const ofertas = [
    {
      id: 1,
      name: 'Laptop Gaming',
      image: 'https://via.placeholder.com/100',
      description: 'Laptop de alto rendimiento con 16GB RAM y 1TB SSD.',
      price: 1500,
      discount: 20,
    },
    {
      id: 2,
      name: 'Smart TV 4K',
      image: 'https://via.placeholder.com/100',
      description: 'Televisor 4K UHD de 65 pulgadas con HDR.',
      price: 800,
      discount: 35, 
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos',
      image: 'https://via.placeholder.com/100',
      description: 'Auriculares Bluetooth con cancelación activa de ruido.',
      price: 200,
      discount: 30, 
    },
    {
      id: 4,
      name: 'Consola de Videojuegos',
      image: 'https://via.placeholder.com/100',
      description: 'Consola de nueva generación con gráficos 4K.',
      price: 500,
      discount: 5, 
    },
    {
      id: 5,
      name: 'Cámara Fotográfica',
      image: 'https://via.placeholder.com/100',
      description: 'Cámara digital con 24.2MP y grabación en 4K.',
      price: 700,
      discount: 60, 
    },
  ];

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ofertas Especiales</Text>
      <View style={styles.ofertasContainer}>
        {ofertas.map((oferta) => (
          <View key={oferta.id} style={styles.ofertaItem}>
            <Image source={{ uri: oferta.image }} style={styles.ofertaImage} />
            <View style={styles.ofertaInfo}>
              <Text style={styles.ofertaName}>{oferta.name}</Text>
              <Text style={styles.ofertaDescription}>{oferta.description}</Text>
              <Text style={styles.ofertaPrice}>
                Precio: ${calculateDiscountedPrice(oferta.price, oferta.discount).toFixed(2)}
              </Text>
              <Text style={styles.originalPrice}>Antes: ${oferta.price.toFixed(2)}</Text>
              <Text style={styles.discountLabel}>-{oferta.discount}% OFF</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};



export default Offers;