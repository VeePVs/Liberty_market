import React from 'react';
import {Image, Pressable, StatusBar, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#000"}  maxLength={10}/>
            <View style={styles.containerPassword}>
                <TextInput placeholder="Ingresa la contraseña" style={styles.inputPassword} placeholderTextColor={"#000"} maxLength={8}/>
                <Icon name="eye" size={30} style={styles.icon} onPress={()=>{

                }}/>
            </View>

        </SafeAreaView>
    );
};

export default Login;
