import { View, Text, Image, Button } from 'react-native'
import React, {useContext} from 'react'
import {ItemsContext} from '../context/ItemContext';

export default function ShopItem({id,name, image, description, price, discount, count}) {
    const {updateCount, updateSubtraction} = useContext(ItemsContext);

    function numFormat(num) {
        let array = num.toFixed(2).split('.');
        array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return array.join(',');
      }

      function printPrice(price, discount) {
        if (discount != 0) {
            return (price - price * (discount * 0.01));
        } else{
            return price;
        }
      }

  return (
    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", margin: 5, height: 150}}>
        <Image source={{uri: `${image}`, width: 60, height: 60}}/>
        <View style={{width: "auto", paddingLeft: 20}}>
            <Text style={{color:"#000", fontWeight: "600"}}>{name}</Text>
            <Text style={{color:"#000", width: '60%'}}>{description}</Text>
            <Text style={{color:"#000"}}>${numFormat(printPrice(price, discount))}</Text>
            <View style={{flexDirection: "row", gap: 10}}>
                <Button color={"#243E8C"} title='-' onPress={()=>{
                    (count!= 0) ?  updateSubtraction(id) : 0
                }}/>
                <Text style={{color:"#000"}}>{count}</Text>
                <Button color={"#243E8C"} onPress={()=>{
                    count<99 ? updateCount(id) : count
                }} title='+'>+</Button>
            </View>
        </View>
    </View>
  )
}