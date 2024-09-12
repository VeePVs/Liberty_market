import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/Item'


export default function Item({name, description, price, image, questions, comments, onPress, discount}) {
  return (
    <View>
      <Pressable style={styles.containerItem} onPress={onPress}>
          <Image style={styles.imgItem} source={{uri: image}}/>
          <View style= {styles.containerItemText}>
              <Text style={styles.nameItem}>{name}</Text>
              <Text style={styles.textItem}>{description}</Text>
              {discount != 0 ? 
                  (<Text style={styles.price}>${price}</Text>)
                : (<></>)}
              <View style={styles.containerPrice}>
                <Text style={styles.priceText}>${discount != 0 ? (price-price*(discount*0.01)).toFixed(2): price}</Text>
                {discount != 0 ? 
                  (<Text style={styles.discount}>{discount}% OFF</Text>)
                : (<></>)}
              </View>
              <Text style={styles.send}>Envío gratis</Text>
          </View>
      </Pressable>
    </View>
  )
}