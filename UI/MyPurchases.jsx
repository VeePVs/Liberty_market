import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/MyPurchasesStyle';

const MyPurchases = () => {

  const purchases = [
    {
      id: 1,
      image: 'https://i.pinimg.com/originals/90/b2/85/90b28579c0a2dce1146d299d6f235ad6.png',
      description: 'Camiseta de algodón 100% con estampado gráfico.',
      status: 'Entregado',
    },
    {
      id: 2,
      image: 'https://static6.festinagroup.com/product/lotus/watches/detail/big/l18758_4.png',
      description: 'Reloj de pulsera digital con correa de acero inoxidable.',
      status: 'En tránsito',
    },
    {
      id: 3,
      image: 'https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw94f28c43/JBL_Tune_Flex_Product%20Image_Hero%202_Black.png?sw=680&sh=680',
      description: 'Auriculares Bluetooth con cancelación de ruido.',
      status: 'Cancelado',
    },
    {
      id: 4,
      image: 'https://static.nike.com/a/images/t_default/79e134c2-497c-44c7-afa5-ba967bc60a5a/calzado-de-running-en-carretera-quest-5-1tmPXN.png',
      description: 'Zapatos deportivos para correr con suela antideslizante.',
      status: 'Entregado',
    },
    {
      id: 5,
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_91854924/fee_786_587_png',
      description: 'Mochila resistente al agua con compartimentos múltiples.',
      status: 'En tránsito',
    },
    {
      id: 6,
      image: 'https://tecnologiasimplificada.com/wp-content/uploads/2022/02/Xiaomi-Mi-CC9-Pro.png',
      description: 'Smartphone con pantalla de 6.5 pulgadas y 128GB de almacenamiento.',
      status: 'Cancelado',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Entregado':
        return <Icon name="check-circle" size={20} color="green" />;
      case 'En tránsito':
        return <Icon name="hourglass-empty" size={20} color="orange" />;
      case 'Cancelado':
        return <Icon name="cancel" size={20} color="red" />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {purchases.map((purchase) => (
        <View key={purchase.id} style={styles.item}>
          <Image
            source={{ uri: purchase.image }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.description}>{purchase.description}</Text>
            <View style={styles.statusContainer}>
              {getStatusIcon(purchase.status)}
              <Text style={[styles.status, { marginLeft: 8 }]}>{purchase.status}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};


export default MyPurchases;