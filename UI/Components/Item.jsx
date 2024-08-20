import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/globalStyles'

export default function Item({name, description, price, image}) {
  return (
    <View style={styles.containerItem}>
        <View style= {styles.containerItemText}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>${price}</Text>
        </View>
        <Image style={styles.imgItem} source={{uri: image, height:180, width:180}}/>
    </View>
  )
}