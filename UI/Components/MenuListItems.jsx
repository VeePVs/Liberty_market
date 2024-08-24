import { View, Text,Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../styles/MenuListItems'

export default function MenuListItems({navigation }) {
  return (
    <ScrollView style={styles.container} horizontal>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={styles.botonText}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.botonText}>Categorias</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Favorites')}>
            <Text style={styles.botonText}>Favoritos</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('MyPurchases')}>
            <Text style={styles.botonText}>Mis compras</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Support')}>
            <Text style={styles.botonText}>Soporte</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Offers')}>
            <Text style={styles.botonText}>Ofertas</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={styles.botonText}>Carrito</Text>
        </Pressable>
    </ScrollView>
  )
}