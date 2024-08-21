import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/globalStyles';

export default function ItemDetail({route, navigation}) {

    const {id, name, price, description, features, image} = route.params;

  return (
        <SafeAreaView style={styles.containerItemDetail}>
            <Image source={{uri: image, width: 300, height: 300}}/>
            <Pressable>

            </Pressable>
                <Text style={styles.nameItem}>{name}</Text>
            <View style={styles.detailsItems}>
                <Text style={styles.priceItem}>${price}</Text>
                <Text style={{color:"#000"}}>{description}</Text>
                <View>
                    {features.map((element, index) => (
                        <Text key={index} style={{ color: "#000" }}>
                            {element}
                        </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
}