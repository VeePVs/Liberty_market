import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
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
import { items } from './UI/database/items.js';
import { UserProvider } from './UI/context/UserContext.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack({setAuth}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ title: 'Inicio de sesión' }}>
          {props => <Login {...props} setAuth={setAuth}/>}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Registro de usuarios' }} />
      </Stack.Navigator>
    );
  }

  function HomeStack({ filteredItems, handleSearch, setFilteredItems }) {
    return (
      <Stack.Navigator initialRouteName="ListItems">
        <Stack.Screen name="ListItems" options={{ title: 'Lista de productos', headerShown:false }}>
          {props => <ListItems {...props} filteredItems={filteredItems} setFilteredItems={setFilteredItems} options={{ title: 'Lista de productos', headerShown:false }}/>}
        </Stack.Screen>
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: 'Detalle del producto' , headerBackVisible: false, headerShown:false}} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Carrito de compras' }} />
        <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ title: 'Sucursal de pago' }} />
      </Stack.Navigator>
    );
  }

function MyDrawer({ filteredItems, handleSearch, setFilteredItems, onSignOut }) {
    return (
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={({ navigation }) => ({
        headerTitle: () => <SearchBar onSearch={handleSearch}/>,
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
        <Drawer.Screen name="HomeStack" options={{ drawerIcon: ({ size }) => (
          <Icon name="home" size={size} color="#5DADEC" />),
          drawerLabel: 'Inicio', title: null }}>
          {props => <HomeStack {...props} filteredItems={filteredItems} handleSearch={handleSearch} setFilteredItems={setFilteredItems}/>}
        </Drawer.Screen>

        <Drawer.Screen name="ProfileScreen" options={{ drawerIcon: ({ size }) => (
          <Icon name="account-circle" size={size} color={"#5DADEC"} />),
          title: 'Perfil', headerTitle: null }}>
          {props => <ProfileScreen {...props} onSignOut={onSignOut}/>}
        </Drawer.Screen>

        <Drawer.Screen name="Offers" component={Offers} options={{ drawerIcon: ({ size }) => (
        <Icon name="local-offer" size={size} color={"#5DADEC"} />),
        title: 'Ofertas' }} />

        <Drawer.Screen name="Categories" component={Categories} options={{ drawerIcon: ({ size }) => (
        <Icon name="category" size={size} color={"#5DADEC"} />), 
        title: 'Categorías' }} />

        <Drawer.Screen name="MyPurchases" component={MyPurchases} options={{ drawerIcon: ({ size }) => (
        <Icon name="shopping-cart" size={size} color={"#5DADEC"} />),
        title: 'Mis compras' }} />

        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ drawerIcon: ({ size }) => (
        <Icon name="favorite" size={size} color={"#5DADEC"} />),
        title: 'Favoritos' }} />

        <Drawer.Screen name="Support" component={Support} options={{ drawerIcon: ({ size }) => (
        <Icon name="support-agent" size={size} color={"#5DADEC"} />), 
        title: 'Soporte', headerTitle: null }} />
      </Drawer.Navigator>
    );
  }

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  };

  const handleSignOut = async () => {
    try {
        await auth().signOut();  
        setIsAuthenticated(false);  
    } catch (error) {
        console.error('Error al cerrar sesión: ', error);
    }
  };

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged((user) => {
          if (user) {
              setIsAuthenticated(true);
          } else {
              setIsAuthenticated(false);
          }
          if (initializing) setInitializing(false);
      });

      return subscriber; 
    }, [initializing,setIsAuthenticated]);

    return(
      <UserProvider setAuth={setIsAuthenticated}>
        <ItemsProvider>
          <NavigationContainer>
              {isAuthenticated ? (
                  <MyDrawer filteredItems={filteredItems} handleSearch={handleSearch} setFilteredItems={setFilteredItems} onSignOut={handleSignOut}/>
              ) : (
                  <AuthStack/>
              )}
          </NavigationContainer>
        </ItemsProvider>
      </UserProvider>
    )
};

export default App;
