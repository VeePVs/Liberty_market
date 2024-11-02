import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import styles from '../../styles/ShopItem';

export default function ShopItem({name, image, description, price, quantity, discount}) {
  function printPrice(price, discount) {
    if (discount != 0) {
        return (price - price * (discount * 0.01));
    } else{
        return price;
    }
  }
  function numFormat(num) {
    let array = num.toFixed(2).split('.');
    array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return array.join(',');
  }
  return (
    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", margin: 5, height: 150}}>
        <Image source={{uri: `${image}`, width: 60, height: 60}}/>
        <View style={{width: "auto", paddingLeft: 20}}>
            <Text style={{color:"#000", fontWeight: "600"}}>{name}</Text>
            <Text style={{color:"#000", width: '60%'}}>{description}</Text>
            <View style={styles.containerPrices}>
                <Text style={styles.totalPrice}>${numFormat(printPrice(price, discount)*quantity)}</Text>
                <Text style={styles.everyPrice}>c/u ${numFormat(printPrice(price, discount))}</Text>
            </View>
            <Text style={{color:"#000"}}>Cantidad: {quantity}</Text>
        </View>
    </View>
  )
}