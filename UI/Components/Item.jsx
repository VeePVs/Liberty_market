import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from '../../styles/Item';
import Animated from 'react-native-reanimated';

export default function Item({id, name, description, price, image, questions, comments, onPress, discount}) {
  function numFormat(num) {
    let array = num.toFixed(2).split('.');
    array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return array.join(',');
  }

  return (
    <View>
      <Pressable style={styles.containerItem} onPress={onPress}>
          <Animated.Image style={styles.imgItem} source={{uri: image}} sharedTransitionTag={`item-${id}`}/>
          <View style= {styles.containerItemText}>
              <Text style={styles.nameItem}>{name}</Text>
              <Text style={styles.textItem}>{description}</Text>
              {discount != 0 ?
                  (<Text style={styles.price}>${numFormat(price)}</Text>)
                : (<></>)}
              <View style={styles.containerPrice}>
                <Text style={styles.priceText}>${discount != 0 ? numFormat((price - price * (discount * 0.01))) : numFormat(price)}</Text>
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
