import React, {useContext} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Pressable, View, Text} from 'react-native'
import styles from "../../styles/CartIcon";
import {ItemsContext} from '../context/ItemContext';

export default function CartIcon({navigation}){
    const {items} = useContext(ItemsContext);

    return (
        <Pressable onPress={()=>{
            navigation.navigate('ShoppingCart')
        }}>
            <View style={styles.items}>
                <Text style={styles.textItems}>{items.length}</Text>
            </View>
            <Icon name={'shopping-cart'} size={35} style={styles.cartIcon}/>
        </Pressable>
    );
}