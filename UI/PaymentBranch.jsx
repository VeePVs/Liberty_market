import { View, Text,ScrollView,TextInput, Pressable, Image, Linking, Alert } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentItem from './Components/PaymentItem'
import styles from '../styles/PaymentBranch'
import { handleIntegrationMP } from './utils/MPintegration';
import InAppBrowser from 'react-native-inappbrowser-reborn';


const PaymentBranch = ({route }) => {
    const { items } = route.params; 

    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => 
            Alert.alert('Error', 'No se pudo abrir el enlace.')
        );
    };

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
      
    const handleBuy = async (items) => {
        const data = await handleIntegrationMP(items)
        if (!data) {
            return console.log("Error")
        }
        InAppBrowser.open(data)
    }
        
  return (
    <SafeAreaView style= {styles.container}>
        <ScrollView>
        {items.map((element, index) => (
                    <PaymentItem name={element.name} description={element.description} price={element.price} key={index} image={element.image} quantity={element.count}/>
                ))}
            <Text style={{color: "#000"}}>Total a pagar: ${numFormat(calculateCheck())}</Text>
        </ScrollView>
        <View>
            <TextInput style={styles.input} placeholder='Ingresa la dirección a enviar.' maxLength={30} placeholderTextColor={"#005"}/>
            <View style={styles.paymentContainer}>
                <Pressable onPress={()=>{
                    handlePress("https://www.pse.com.co/persona")
                }}>
                        <Image source={{ uri: "https://chukuwata.org.co/wp-content/uploads/2019/01/Boton-Blanco-PSE.png", height: 60, width: 60 }} />
                </Pressable>
                <Pressable onPress={()=>{
                    handlePress("https://www.efecty.com.co/web/")
                }}>
                    <Image source={{ uri: "https://seeklogo.com/images/E/efecty-colombia-logo-C4C6532B80-seeklogo.com.png", height: 60, width: 60 }} />
                </Pressable>
                <Pressable onPress={()=>{
                    handlePress("https://www.mastercard.com.co/es-co.html")
                }}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/146/146571.png", height: 60, width: 60 }} />
               </Pressable>
               <Pressable onPress={async ()=> await handleBuy(items)} style={styles.paymentButton}>
                    <Text style={styles.paymentButtonText}>Pagar con Mercado Pago</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
)
}

export default PaymentBranch