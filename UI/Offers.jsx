import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/OffersStyle';

const Offers = () => {
  const offers = [
    {
      id: 1,
      name: 'Laptop Gaming',
      image: 'https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/33512f9b-8f21-4634-b5c1-222296449a00/public',
      description: 'Laptop de alto rendimiento con 16GB RAM y 1TB SSD.',
      price: 1500,
      discount: 20,
    },
    {
      id: 2,
      name: 'Smart TV 4K',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/co/qn65q65bakxzl/gallery/co-qled-q60b-qn65q65bakxzl-531990242?$650_519_PNG$',
      description: 'Televisor 4K UHD de 65 pulgadas con HDR.',
      price: 800,
      discount: 35, 
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos',
      image: 'https://www.philips.es/c-dam/b2c/category-pages/sound-and-vision/headphones/master/noise-cancelling-headphones/tah8507-product-image-300x343.png',
      description: 'Auriculares Bluetooth con cancelación activa de ruido.',
      price: 200,
      discount: 30, 
    },
    {
      id: 4,
      name: 'Consola de Videojuegos PS5',
      image: 'https://catalogo.claro.com.ec/uploads/imgs/productos/consola-sony-ps5-slim-edicion-digital-1tb-sonconps5711719573982/blanco/zoom/03-consola-sony-ps5-slim-edicion-digital-1tb-sonconps5711719573982-blanco-back.png',
      description: 'Consola de nueva generación con gráficos 4K.',
      price: 500,
      discount: 5, 
    },
    {
      id: 5,
      name: 'Cámara Fotográfica',
      image: 'https://metrocamaras.com/cdn/shop/files/CanonR6mkii.png?v=1721791958',
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
      <View style={styles.offersContainer}>
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerItem}>
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
        ))}
      </View>
    </ScrollView>
  );
};



export default Offers;