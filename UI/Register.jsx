import { View, Text,TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/globalStyles'
import PasswordInput from './Components/PasswordInput';
import { SelectList } from 'react-native-dropdown-select-list'


export default function Register() {
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [Cities, setCities] = React.useState([]);
  
  const colombia = [
    { key: '1', value: 'Antioquia', capital: 'Medellín', cities: ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Apartadó'] },
    { key: '2', value: 'Cundinamarca', capital: 'Bogotá', cities: ['Bogotá', 'Soacha', 'Girardot', 'Zipaquirá', 'Fusagasugá'] },
    { key: '3', value: 'Valle del Cauca', capital: 'Cali', cities: ['Cali', 'Buenaventura', 'Palmira', 'Tuluá', 'Cartago'] },
    { key: '4', value: 'Atlántico', capital: 'Barranquilla', cities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Baranoa'] },
    { key: '5', value: 'Santander', capital: 'Bucaramanga', cities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja'] },
    { key: '6', value: 'Bolívar', capital: 'Cartagena', cities: ['Cartagena', 'Magangué', 'Turbaco', 'Arjona', 'Mompox'] }
  ];

  const handleDepartmentChange = (val) => {
    setSelectedDepartment(val);
    const selectedCities = colombia.find(dep => dep.value === val)?.cities || [];
    setCities(selectedCities.map((city, index) => ({ key: index.toString(), value: city })));
  };

  return (
    <SafeAreaView style={styles.containerRegister}>
        <Text style={styles.title}>Inicia con "Nombre app"</Text>
        <TextInput placeholder={"Crea un usuario"} maxLength={10} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <PasswordInput placeholder={"Crea la contraseña"}/>
        <PasswordInput placeholder={"Confirma tu contraseña"}/>
        <TextInput placeholder={"Ingresa tu correo electrónico"} maxLength={10} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <TextInput placeholder={"Fecha de nacimiento 'DD/MM/AAAA'"} maxLength={8} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <TextInput placeholder={"Dirección"} maxLength={30} style={styles.input} placeholderTextColor={"#E1F7F5"} />
        <SelectList 
            setSelected={handleDepartmentChange} 
            data={colombia} 
            save="value"
            inputStyles={{width: 240, color: "#E1F7F5"}}
            boxStyles={{borderColor:'#E1F7F5', marginBottom:12}}
            dropdownStyles={{width: 300}}
            notFoundText='Departamento no encontrado'
            placeholder='Selecciona un departamento'            
            searchPlaceholder='Busca tu ciudad'      
        />
        <SelectList 
            setSelected={(val) => setSelectedCity(val)} 
            data={Cities} 
            save="value"
            inputStyles={{width: 240, color: "#E1F7F5"}}
            dropdownStyles={{width: 300}}
            boxStyles={{borderColor:'#E1F7F5', marginBottom:12}}
            notFoundText='Ciudad no encontrada'
            placeholder='Selecciona una ciudad'      
            searchPlaceholder='Busca tu ciudad'      
          />
        <Pressable style={styles.registerButton}>
                <Text style={styles.textButton}>Continuar</Text>
        </Pressable>
      </SafeAreaView>    
  )
}