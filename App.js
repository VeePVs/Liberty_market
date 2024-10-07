import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import SearchBar from './UI/Components/SearchBar.jsx';
import CartIcon from './UI/Components/CartIcon.jsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ItemsProvider } from './UI/context/ItemContext.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack({setAuth}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inicio de sesión' }} initialParams={{setAuth}} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Registro de usuarios' }} />
      </Stack.Navigator>
    );
  }

  function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="ListItems">
        <Stack.Screen name="ListItems" component={ListItems} options={{ title: 'Lista de productos', headerShown:false }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: 'Detalle del producto' , headerBackVisible: false, headerShown:false}} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Carrito de compras' }} />
        <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ title: 'Sucursal de pago' }} />
      </Stack.Navigator>
    );
  }

function MyDrawer() {
  const handleSearch = (query) => {
    console.log('Buscando:', query);
  };
    return (
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={({ navigation }) => ({
        headerTitle: () => <SearchBar />,
        drawerStyle: {
          backgroundColor: '#292929',
        },
        drawerLabelStyle: {
          color: '#FFF',
        },
        drawerActiveBackgroundColor: '#243E8C'
        ,
        headerStyle: {
          backgroundColor: '#243E8C',
        },
        headerTitleContainerStyle: {
          width: '70%',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <CartIcon navigation={navigation} />
      })}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{ drawerIcon: ({ size }) => (
        <Icon name="home" size={size} color="blue" />),
        drawerLabel: 'Inicio', title: null }} />

        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ drawerIcon: ({ size }) => (
        <Icon name="account-circle" size={size} color={"blue"} />),
        title: 'Perfil', headerTitle: null }} />

        <Drawer.Screen name="Offers" component={Offers} options={{ drawerIcon: ({ size }) => (
        <Icon name="local-offer" size={size} color={"blue"} />),
        title: 'Ofertas' }} />

        <Drawer.Screen name="Categories" component={Categories} options={{ drawerIcon: ({ size }) => (
        <Icon name="category" size={size} color={"blue"} />), 
        title: 'Categorías' }} />

        <Drawer.Screen name="MyPurchases" component={MyPurchases} options={{ drawerIcon: ({ size }) => (
        <Icon name="shopping-cart" size={size} color={"blue"} />),
        title: 'Mis compras' }} />

        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ drawerIcon: ({ size }) => (
        <Icon name="favorite" size={size} color={"blue"} />),
        title: 'Favoritos' }} />

        <Drawer.Screen name="Support" component={Support} options={{ drawerIcon: ({ size }) => (
        <Icon name="support-agent" size={size} color={"blue"} />), 
        title: 'Soporte', headerTitle: null }} />
      </Drawer.Navigator>
    );
  }

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    return(
      <ItemsProvider>
        <NavigationContainer>
            {isAuthenticated ? (
                <MyDrawer />
            ) : (
                <AuthStack setAuth={setIsAuthenticated}/>
            )}
        </NavigationContainer>
      </ItemsProvider>
    )
};

export default App;
