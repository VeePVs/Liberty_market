import React from 'react';
import {StatusBar, Text, Sty} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Text style={styles.title}>Inicio de sesión</Text>
        </SafeAreaView>
    );
};

export default Login;
