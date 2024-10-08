import React, {useContext} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Pressable, View, Text} from 'react-native'
import styles from "../../styles/CartIcon";
import {ItemsContext} from '../context/ItemContext';

export default function CartIcon({navigation}){
    const {items} = useContext(ItemsContext);

    function countItems() {
        let counter = 0;
        items.map((item)=>{
            counter = counter + parseInt(item.count);
        });
        return counter;
    }

    return (
        <Pressable onPress={()=>{
            navigation.navigate('ShoppingCart');
        }}>
            <View style={styles.items}>
                <Text style={styles.textItems}>{countItems()}</Text>
            </View>
            <Icon name={'shopping-cart'} size={35} style={styles.cartIcon}/>
        </Pressable>
    );
}