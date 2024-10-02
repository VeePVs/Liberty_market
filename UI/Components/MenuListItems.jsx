import { Text,Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../styles/MenuListItems'

export default function MenuListItems({navigation }) {
  return (
    <ScrollView style={styles.container} horizontal>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={styles.buttonText}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.buttonText}>Categorias</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Favorites')}>
            <Text style={styles.buttonText}>Favoritos</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('MyPurchases')}>
            <Text style={styles.buttonText}>Mis compras</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Support')}>
            <Text style={styles.buttonText}>Soporte</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Offers')}>
            <Text style={styles.buttonText}>Ofertas</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={styles.buttonText}>Carrito</Text>
        </Pressable>
    </ScrollView>
  )
}