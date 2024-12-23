import { View, ScrollView, Pressable, Text, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ShopItem from './Components/ShopItem'
import styles from '../styles/ShoppingCart'
import { ItemsContext } from './context/ItemContext'

const ShoppingCart = ({navigation}) => {
    const {items, removeItem} = useContext(ItemsContext);

    function detailItemFunction(obj) {
        navigation.navigate('PaymentBranch', {items: obj})
    }

    function calculateCheck() {
        let total = 0;
        
        items.map((item)=>{
            if (item.discount != 0) {
                total = total + ((item.price - item.price * (item.discount * 0.01))) * item.count;
            }else{
                total = total + (item.price) * item.count;
            }
        })
        return total;
    }

    function numFormat(num) {
        let array = num.toFixed(2).split('.');
        array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return array.join(',');
      }

    useEffect(() => {
        items.forEach((item) => {
          if (item.count === 0) {
            removeItem(item.id);
          }
        });
    }, [items, removeItem]);

  return (
        <SafeAreaView style={styles.container}>
            {
                items.length !== 0 ?
                    <FlatList 
                        data={items}
                        renderItem={({item})=><ShopItem key={item.id} id={item.id} name={item.name} description={item.description} image={item.image}  price={item.price} discount={item.discount} count={item.count}/>}
                        keyExtractor={items.id}
                    />
                : (
                    <View style={styles.containerNoProducts}>
                        <Text style={styles.textNoProducts}>No tienes productos en el carrito</Text>
                    </View>
                )
            }
            <View style={styles.paymentContainer}>
                <Text>Total a pagar: ${numFormat(calculateCheck())}</Text>
                <Pressable style={styles.paymentButton} disabled={items.length == 0 ? true : false}  onPress={()=>{
                    detailItemFunction(items);
                }}>
                    <Text style={styles.textPaymentButton}>Proceder con el pago</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default ShoppingCart;
