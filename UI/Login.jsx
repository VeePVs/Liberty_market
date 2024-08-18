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

const Login = () => {
    const [visible, setVisibleIcon] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#000"}  maxLength={10}/>
            <View style={styles.containerPassword}>
                <TextInput placeholder="Ingresa la contraseña" style={styles.inputPassword} placeholderTextColor={"#000"} maxLength={8} secureTextEntry={visiblePassword}/>
                <Icon name={visible== false ? 'eye-slash': 'eye'} size={30} style={styles.icon} onPress={()=>{
                    setVisibleIcon(!visible);
                    setVisiblePassword(!visiblePassword);
                }}/>
            </View>
            <Pressable>
                <Text>Continuar</Text>
            </Pressable>

        </SafeAreaView>
    );
};
/*
function verifyPassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{1,8}$/;
    if (!password.match(pattern)) {

    }
}
*/
export default Login;
