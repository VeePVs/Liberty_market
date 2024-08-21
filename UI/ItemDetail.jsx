import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ItemDetail({route, navigation}) {

    const {id, name, price, description, features, image} = route.params;

  return (
        <SafeAreaView>
            <Image source={{uri: image, width: 300, height: 300}}/>
            <Pressable>

            </Pressable>
            <Text style={{color:"#000"}}>{name}</Text>
            <Text style={{color:"#000"}}>{price}</Text>
            <Text style={{color:"#000"}}>{description}</Text>
            <View>
                {features.map((element, index) => (
                    <Text key={index} style={{ color: "#000" }}>
                        {element}
                    </Text>
                ))}
            </View>
        </SafeAreaView>
    )
}