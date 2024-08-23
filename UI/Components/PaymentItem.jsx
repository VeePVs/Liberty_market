import { View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function ShopItem({name, image, description, price, quantity}) {

  return (
    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", margin: 5, height: 150}}>
        <Image source={{uri: `${image}`, width: 60, height: 60}}/>
        <View style={{width: "auto", paddingLeft: 20}}>
            <Text style={{color:"#000", fontWeight: "600"}}>{name}</Text>
            <Text style={{color:"#000", width: '60%'}}>{description}</Text>
            <Text style={{color:"#000"}}>${price}</Text>
            <Text style={{color:"#000"}}>Cantidad: {quantity}</Text>
        </View>
    </View>
  )
}