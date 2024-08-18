import React from 'react';
import {Image, Pressable, StatusBar, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const usuario = [{
    usuario: 'Vee',
    contraseña: 'Vee123%'
},
]

const Login = ({navigation}) => {
    const [visible, setVisibleIcon] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Text style={styles.title}>Bienvenido a "nombre de la app"</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#E1F7F5"}  maxLength={10}/>
            <View style={styles.containerPassword}>
                <TextInput placeholder="Ingresa la contraseña" style={styles.inputPassword} placeholderTextColor={"#E1F7F5"} maxLength={8} secureTextEntry={visiblePassword}/>
                <Icon name={visible== false ? 'eye-slash': 'eye'} size={30} style={styles.icon} onPress={()=>{
                    setVisibleIcon(!visible);
                    setVisiblePassword(!visiblePassword);
                }}/>
            </View>
            <Pressable style={styles.generalButton} onPress={()=>{
                navigation.navigate('Register')
            }}>
                <Text style={styles.textButton}>¿No tienes cuenta?</Text>
            </Pressable>
            <Pressable style={styles.registerButton}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>

        </SafeAreaView>
    );
};

export default Login;
