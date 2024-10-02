import { Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Stars({onPress, star}) {
    return (
        <Pressable onPress={onPress}>
            <Icon name={star} size={30} color={"#FFD700"}/>
        </Pressable>
    )
}