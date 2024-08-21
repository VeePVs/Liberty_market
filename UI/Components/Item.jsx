import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/globalStyles'

export default function Item({name, description, price, image, onPress}) {
  return (
    <Pressable style={styles.containerItem} onPress={onPress}>
        <View style= {styles.containerItemText}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>${price}</Text>
        </View>
        <Image style={styles.imgItem} source={{uri: image, height:180, width:180}}/>
    </Pressable>
  )
}