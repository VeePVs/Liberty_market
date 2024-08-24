import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/FavoritesStyle';

const products = [
  {
    id: '1',
    image: 'https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8u4h56I3YwHLAQ4G0XzTY4Dg==/Views/1590_D3500_right.png', 
    description: 'Cámara DSLR Nikon D3500: Perfecta para principiantes con 24.2 MP y grabación Full HD.',
    status: 'Disponible',
  },
  {
    id: '2',
    image: 'https://media.croma.com/image/upload/v1675347470/Croma%20Assets/Communication/Mobiles/Images/268868_u7nsk3.png', 
    description: 'Smartphone Samsung Galaxy S23: Con pantalla AMOLED de 6.1" y procesador Exynos 2200.',
    status: 'No disponible',
  },
  {
    id: '3',
    image: 'https://www.sony.com/is/image/gwtprod/a623e0ac346dea68e59c279e05221b59?fmt=png-alpha&wid=515&hei=515&trf=trim', 
    description: 'Auriculares Sony WH-1000XM4: Cancelación de ruido avanzada y calidad de sonido premium.',
    status: 'Disponible',
  },
  {
    id: '4',
    image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png', 
    description: 'Laptop Apple MacBook Pro 16": Con procesador M1 Pro, ideal para profesionales y creativos.',
    status: 'Disponible',
  },
  {
    id: '5',
    image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86693664/fee_786_587_png', 
    description: 'Smartwatch Fitbit Charge 5: Monitor de salud y actividad con GPS integrado y pantalla AMOLED.',
    status: 'No disponible',
  },
  {
    id: '6',
    image: 'https://media.croma.com/image/upload/v1667851667/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/259175_12_hldr2e.png', 
    description: 'Tablet Microsoft Surface Pro 8: Ideal para trabajo y entretenimiento con pantalla de 13" y Windows 11.',
    status: 'Disponible',
  },
];

const FavoritesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
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
      ))}
    </ScrollView>
  );
};

export default FavoritesScreen;