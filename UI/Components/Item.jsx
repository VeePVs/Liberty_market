import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/Item'


export default function Item({name, description, price, image, questions, comments, onPress}) {
  return (
    <View>
      <Pressable style={styles.containerItem} onPress={onPress}>
          <Image style={styles.imgItem} source={{uri: image}}/>
          <View style= {styles.containerItemText}>
              <Text style={styles.textItem}>{name}</Text>
              <Text style={styles.textItem}>{description}</Text>
              <Text style={styles.textItem}>${price}</Text>
          </View>
      </Pressable>
    </View>
  )
}