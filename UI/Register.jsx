import { View, Text,TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/globalStyles'
import PasswordInput from './Components/PasswordInput';

export default function Register({navigation}) {
  return (
    <SafeAreaView style={styles.containerRegister}>
        <Text style={styles.title}>Inicia con "Nombre app"</Text>
        <TextInput placeholder={"Ingresa tu contraseña"} maxLength={10} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <PasswordInput placeholder={"Ingresa la contraseña"}/>
        <PasswordInput placeholder={"Confirma tu contraseña"}/>
        <TextInput placeholder={"Ingresa tu correo electrónico"} maxLength={10} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <TextInput placeholder={"Fecha de nacimiento 'DD/MM/AAAA'"} maxLength={8} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <TextInput placeholder={"Dirección"} maxLength={30} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <Pressable style={styles.registerButton}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
      </SafeAreaView>    
  )
}