import React from 'react';
import {Image, Pressable, StatusBar, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'
import PasswordInput from './Components/PasswordInput';

const usuario = [{
    usuario: 'Vee',
    contraseña: 'Vee123%'
},
]

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Text style={styles.title}>Bienvenido a "nombre de la app"</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#E1F7F5"}  maxLength={10}/>
            <PasswordInput placeholder={"Ingresa la contraseña"}/>
            <Pressable style={styles.generalButton} onPress={()=>{
                navigation.navigate('Register')
            }}>
                <Text style={styles.textButton}>¿No tienes cuenta?</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={()=>{
                navigation.navigate('ListItems')
            }}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;
