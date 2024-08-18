import React from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './UI/Login';
import Register from './UI/Register';

//It's for managing windows in the app
const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login} options={{title: 'Inicio de sesión'}}/>
            <Stack.Screen name={'Register'} component={Register} options={{title: 'Registro de usuarios'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
