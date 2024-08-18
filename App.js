import React from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './UI/Login';

//It's for managing windows in the app
const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login} options={{title: 'Inicio de sesión'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
