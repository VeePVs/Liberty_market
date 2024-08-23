import { View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function ShopItem({name, image, description, price}) {
    const [quantity, setQuantity] = React.useState(1)

  return (
    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", margin: 5, height: 150}}>
        <Image source={{uri: `${image}`, width: 60, height: 60}}/>
        <View style={{width: "auto", paddingLeft: 20}}>
            <Text style={{color:"#000", fontWeight: "600"}}>{name}</Text>
            <Text style={{color:"#000", width: '60%'}}>{description}</Text>
            <Text style={{color:"#000"}}>${price}</Text>
            <View style={{flexDirection: "row", gap: 10}}>
                <Button color={"#243E8C"} title='-' onPress={()=>{
                    (quantity!= 0) ? setQuantity(quantity-1) : setQuantity(0)
                }}/>
                <Text style={{color:"#000"}}>{quantity}</Text>
                <Button color={"#243E8C"} onPress={()=>{
                    quantity<99 ? setQuantity(quantity+1) : setQuantity(99)
                }} title='+'>+</Button>
            </View>
        </View>
    </View>
  )
}