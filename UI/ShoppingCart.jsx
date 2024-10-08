import { View, ScrollView, Pressable, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ShopItem from './Components/ShopItem'
import styles from '../styles/ShoppingCart'
import { ItemsContext } from './context/ItemContext'

const ShoppingCart = ({navigation}) => {
    const {items} = useContext(ItemsContext);

    function detailItemFunction(obj) {
        navigation.navigate('PaymentBranch', {items: obj})
    }

    function calculateCheck() {
        let total = 0;
        items.map((item)=>{
            total = total + parseFloat(item.price);
        })
        console.log(total)
        return total;
    }

  return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={items}
                renderItem={({item})=><ShopItem key={item.id} name={item.name} description={item.description} image={item.image}  price={item.price}/>}
                keyExtractor={items.id}
            />
            <View style={styles.paymentContainer}>
                <Text>Total a pagar: {calculateCheck}</Text>
                <Pressable style={styles.paymentButton} onPress={()=>{
                    detailItemFunction(items);
                }}>
                    <Text style={styles.textPaymentButton}>Proceder con el pago</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ShoppingCart