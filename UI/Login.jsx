import React, { useContext } from 'react';
import {Pressable, Text, TextInput, Alert, View, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/Login';
import PasswordInput from './Components/PasswordInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import {verifyLogin} from './Auth/fireAuth';
import { UserContext } from './context/UserContext';

const Login = ({navigation}) => {
    const [user, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const { setUserUID } = useContext(UserContext);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        const uid = await verifyLogin(user, password);
        setIsLoading(false);

        if (uid) {
            setUserUID(uid);
            Alert.alert('Login exitoso', 'Bienvenido');
        } else {
            Alert.alert('Error', 'No se pudo iniciar sesión');
        }
    };

    return (
        <SafeAreaView className="flex-1 obj justify-center items-center" style={styles.container}>
            {isLoading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Cargando...</Text>
                </View>
            )}
            <Icon name={'shopping-cart'} size={100} style={styles.iconLogin}/>
            <Text style={styles.title}>Bienvenido a Liberty Market</Text>
            <TextInput placeholder="Ingresa el usuario" style={styles.input} placeholderTextColor={'#E1F7F1'}  maxLength={10} onChangeText={text => onChangeUser(text)}/>
            <PasswordInput placeholder={'Ingresa la contraseña'} onChangeText={text => onChangePassword(text)}/>
            <Pressable style={styles.registerButton} onPress={handleLogin}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
            <Pressable style={styles.generalButton} onPress={()=>{
                navigation.navigate('Register');
            }}>
                <Text style={styles.textButtonRegister}>¿No tienes cuenta?</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;
