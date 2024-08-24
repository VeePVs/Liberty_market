import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './UI/Login';
import Register from './UI/Register';
import ListItems from './UI/ListItems';
import ItemDetail from './UI/ItemDetail';
import ShoppingCart from './UI/ShoppingCart';
import PaymentBranch from './UI/PaymentBranch';
import Offers from './UI/Offers';
import MyPurchases from './UI/MyPurchases';
import Support from './UI/Support';
import FavoritesScreen from './UI/Favorites';
import Categories from './UI/Categories';
import ProfileScreen from './UI/ProfileScreen';

//It's for managing windows in the app
const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login} options={{title: 'Inicio de sesión'}}/>
            <Stack.Screen name={'Register'} component={Register} options={{title: 'Registro de usuarios'}}/>
            <Stack.Screen name={'ListItems'} component={ListItems} options={{title: 'Lista de productos', headerBackVisible: false}}/>
            <Stack.Screen name={'ItemDetail'} component={ItemDetail} options={{title: 'Detalle del producto'}}/>
            <Stack.Screen name={'PaymentBranch'} component={PaymentBranch} options={{title: 'Sucursal de pago'}}/>
            <Stack.Screen name={'ShoppingCart'} component={ShoppingCart} options={{title: 'Carrito de compras'}}/>
            <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} options={{title: 'Perfil'}}/>
            <Stack.Screen name={'Support'} component={Support} options={{title: 'Soporte'}}/>
            <Stack.Screen name={'Offers'} component={Offers} options={{title: 'Ofertas'}}/>
            <Stack.Screen name={'Categories'} component={Categories} options={{title: 'Categorias'}}/>
            <Stack.Screen name={'MyPurchases'} component={MyPurchases} options={{title: 'Mis compras'}}/>
            <Stack.Screen name={'Favorites'} component={FavoritesScreen} options={{title: 'Favoritos'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
