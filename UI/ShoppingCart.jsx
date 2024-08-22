import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ShopItem from './Components/ShopItem'

const ShoppingCart = () => {
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

  return (
        <SafeAreaView>
            <ScrollView>
                {items.map((element, index) => (
                    <ShopItem name={element.name} image={element.image} description={element.description} price={element.price}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShoppingCart