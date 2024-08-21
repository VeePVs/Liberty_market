import React from 'react';
import {Image, Pressable, StatusBar, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'
import PasswordInput from './Components/PasswordInput';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation}) => {
    const [user, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const users = [{
        username: 'Vee',
        password: 'Vee123%'
    },
    ]

    function passwordVerify(navigation, user, password) {
        if (users.find(us => us.username == user)) {
            if (users.find(us => us.password == password)) {
                navigation.navigate('ListItems')
            }else{

            }
        }else{

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} statusBarStyle="dark-content" />
            <Icon name={'shopping-cart'} size={100} style={styles.iconLogin}/>
            <Text style={styles.title}>Bienvenido a "nombre de la app"</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#E1F7F1"}  maxLength={10} onChangeText={text => onChangeUser(text)}/>
            <PasswordInput placeholder={"Ingresa la contraseña"} onChangeText={text => onChangePassword(text)}/>
            <Pressable style={styles.generalButton} onPress={()=>{
                navigation.navigate('Register')
            }}>
                <Text style={styles.textButton}>¿No tienes cuenta?</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={()=>{
                console.log(user)
                console.log(password)
                passwordVerify(navigation, user, password)
            }}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;
