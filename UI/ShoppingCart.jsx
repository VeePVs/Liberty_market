import { View, ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ShopItem from './Components/ShopItem'
import styles from '../styles/ShoppingCart'


const ShoppingCart = ({navigation}) => {
    const items =[
        {
            id: 1,
            price: 299999,
            name: "Smartphone Samsung Galaxy A52",
            description: "Smartphone con pantalla de 6.5\", 128GB de almacenamiento y cámara de 64MP.",
            image: "https://m.media-amazon.com/images/I/418-u5vcIwL.jpg",
        },
        {
            id: 2,
            price: 1599999,
            name: "Laptop Dell Inspiron 15 3000",
            description: "Laptop con procesador Intel Core i5, 8GB RAM, 256GB SSD.",
            image: "https://asyscomputadores.com/wp-content/uploads/2021/03/Portatil-Dell-Inspiron-15-3505.jpg"
        }
    ]

    function detailItemFunction(obj) {
        navigation.navigate('PaymentBranch', {items: obj})
    }

  return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerItems}>
                {items.map((element, index) => (
                    <ShopItem key={index} name={element.name} image={element.image} description={element.description} price={element.price}/>
                ))}
                <Text style={styles.textTotal}>Total a pagar: $1899998</Text>
            </ScrollView>
            <View style={styles.paymentContainer}>
                <Pressable style={styles.paymentButton} onPress={()=>{
                    detailItemFunction(items);
                }}>
                    <Text style={styles.textPaymentButton}>Proceder con el pago</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ShoppingCart