import React from 'react';
import {Image, Pressable, StatusBar, Text, TextInput, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/globalStyles'
import PasswordInput from './Components/PasswordInput';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation, route}) => {
    const [user, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const { setAuth } = route.params; 

    const users = [{
        username: 'Vee',
        password: 'Vee123%'
    },
    ]

    const createTwoButtonAlert = (props) =>
        Alert.alert('Registro no valido', props, [
          {
            text: 'Cancelar',
            onPress: () => console.log('Continuar'),
            style: 'cancel',
          },
        ]);

    function passwordVerify(navigation, user, password) {
        if (users.find(us => us.username == user) && users.find(us => us.password == password)) {
            setAuth(true);
            navigation.navigate('ListItems')
        }else{
            createTwoButtonAlert("Usuario o clave invalidos, por valor intentar nuevamente.");
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-purple-600 obj justify-center items-center" >
            <Icon name={'shopping-cart'} size={100} style={styles.iconLogin}/>
            <Text style={styles.title}>Bienvenido a Liberty Market</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={"#E1F7F1"}  maxLength={10} onChangeText={text => onChangeUser(text)}/>
            <PasswordInput placeholder={"Ingresa la contraseña"} onChangeText={text => onChangePassword(text)}/>
            <Pressable style={styles.generalButton} onPress={()=>{
                navigation.navigate('Register')
            }}>
                <Text style={styles.textButton}>¿No tienes cuenta?</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={()=>{
                passwordVerify(navigation, user, password)
            }}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;
