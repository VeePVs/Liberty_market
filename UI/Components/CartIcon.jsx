import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Pressable} from 'react-native'
import styles from "../../styles/CartIcon";

export default function CartIcon({navigation}){
    return (
        <Pressable onPress={()=>{
            navigation.navigate('ShoppingCart')
        }}>
            <Icon name={'shopping-cart'} size={35} style={styles.cartIcon}/>
        </Pressable>
    );
}