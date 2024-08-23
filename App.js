import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './UI/Login';
import Register from './UI/Register';
import ListItems from './UI/ListItems';
import ItemDetail from './UI/ItemDetail';
import ShoppingCart from './UI/ShoppingCart';

//It's for managing windows in the app
const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'ShoppingCart'} component={ShoppingCart} options={{title: 'Carrito de compras'}}/>
            <Stack.Screen name={'Login'} component={Login} options={{title: 'Inicio de sesión'}}/>
            <Stack.Screen name={'Register'} component={Register} options={{title: 'Registro de usuarios'}}/>
            <Stack.Screen name={'ListItems'} component={ListItems} options={{title: 'Lista de productos', headerBackVisible: false}}/>
            <Stack.Screen name={'ItemDetail'} component={ItemDetail} options={{title: 'Detalle del producto'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
