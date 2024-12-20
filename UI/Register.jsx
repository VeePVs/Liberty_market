import {Text,TextInput, Pressable, Alert, View, ActivityIndicator } from 'react-native';
import React, {useContext, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/Register';
import PasswordInput from './Components/PasswordInput';
import { SelectList } from 'react-native-dropdown-select-list';
import {createUser} from './Auth/fireAuth';
import {UserContext} from './context/UserContext.js';

export default function Register() {
  const [user, setUser] = useState('');
  const [addressEmail, setAddressEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [Cities, setCities] = useState([]);
  const { setUserUID } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);


  function valideDate(text) {
    let date = text;

    if (text.length < birthdate.length) {
        setBirthdate(text);
        return;
    }

    if (text.length === 2 && text[2] !== '/') {
        date += '/';
    } else if (text.length === 5 && text[5] !== '/') {
        date += '/';
    }

    setBirthdate(date);
}

  const colombia = [
    { key: '1', value: 'Antioquia', capital: 'Medellín', cities: ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Apartadó'] },
    { key: '2', value: 'Cundinamarca', capital: 'Bogotá', cities: ['Bogotá', 'Soacha', 'Girardot', 'Zipaquirá', 'Fusagasugá'] },
    { key: '3', value: 'Valle del Cauca', capital: 'Cali', cities: ['Cali', 'Buenaventura', 'Palmira', 'Tuluá', 'Cartago'] },
    { key: '4', value: 'Atlántico', capital: 'Barranquilla', cities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Baranoa'] },
    { key: '5', value: 'Santander', capital: 'Bucaramanga', cities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja'] },
    { key: '6', value: 'Bolívar', capital: 'Cartagena', cities: ['Cartagena', 'Magangué', 'Turbaco', 'Arjona', 'Mompox'] },
  ];

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{3,}$/;
    return regex.test(password);
  };

  const validateAge = (birthdate) => {
    const [day, month, year] = birthdate.split('/');
    const birthDateObj = new Date(year, month - 1, day);

    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (day > 31 || month > 12) {
      return '';
    }
  
    return age >= 18 && age <= 50;
  };

  const handleRegister = async () => {
    if (password == '' || birthdate == '' || birthdate.length != 10 || address == '' || selectedCity == '' || selectedDepartment == '' || user == '' || addressEmail == '') {
      Alert.alert('Error', 'Tienes campos vacios o incorrectos');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener un máximo de 8 caracteres e incluir al menos 1 mayúscula, 1 carácter especial, letras y números.');
      return;
    }
    if (!validateAge(birthdate)) {
      Alert.alert('Error', 'No está en el rango de edad para crear la cuenta o el formato esta incorrecto.');
      return;
    }
    setIsLoading(true);
    try {
      const newUser = {
        user,
        password,
        addressEmail,
        birthdate,
        address,
        selectedDepartment,
        selectedCity,
      };
      await createUser(newUser, setUserUID);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al crear el usuario');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDepartmentChange = (val) => {
    setSelectedDepartment(val);
    const selectedCities = colombia.find(dep => dep.value === val)?.cities || [];
    setCities(selectedCities.map((city, index) => ({ key: index.toString(), value: city })));
  };

  return (
    <SafeAreaView style={styles.containerRegister}>
        <Text style={styles.title}>Inicia con Liberty App</Text>
        <TextInput placeholder={'Crea un usuario'} maxLength={10} style={styles.input} placeholderTextColor={'#E1F7F5'} onChangeText={setUser}/>
        <PasswordInput placeholder={'Crea la contraseña'} maxLength={8} onChangeText={setPassword}/>
        <TextInput placeholder={'Ingresa tu correo electrónico'} style={styles.input} placeholderTextColor={'#E1F7F5'} onChangeText={setAddressEmail}/>
        <TextInput
          placeholder={"Fecha de nacimiento 'DD/MM/AAAA'"}
          maxLength={10}
          style={styles.input}
          placeholderTextColor={'#E1F7F5'}
          value={birthdate}
          onChangeText={text => valideDate(text)}
        />
        <TextInput
          placeholder={'Dirección'}
          maxLength={30}
          style={styles.input}
          placeholderTextColor={'#E1F7F5'}
          onChangeText={setAddress}
        />
        <SelectList
            setSelected={handleDepartmentChange}
            data={colombia}
            save="value"
            inputStyles={{width: 240, color: '#E1F7F5'}}
            boxStyles={{borderColor:'#E1F7F5', marginBottom:12}}
            dropdownStyles={{width: 300}}
            dropdownTextStyles={{color: '#E1F7F5'}}
            notFoundText="Departamento no encontrado"
            placeholder="Selecciona un departamento"
            searchPlaceholder="Busca tu ciudad"
        />
        <SelectList
            setSelected={(val) => setSelectedCity(val)} 
            data={Cities}
            save="value"
            inputStyles={{width: 240, color: '#E1F7F5'}}
            dropdownStyles={{width: 300}}
            boxStyles={{borderColor:'#E1F7F5', marginBottom:12}}
            dropdownTextStyles={{color: "#E1F7F5"}}
            notFoundText="Ciudad no encontrada"
            placeholder="Selecciona una ciudad"
            searchPlaceholder="Busca tu ciudad"
          />
        <Pressable style={styles.registerButton}  onPress={handleRegister}>
                <Text style={styles.textButton}>Continuar</Text>
        </Pressable>
        {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      </SafeAreaView>
  );
}
