import React, { useState, useEffect } from 'react';
import { View, Modal, TextInput, Button, ScrollView, Text, Pressable } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ProfileHeader from './Components/ProfileHeader'; 
import CardList from './Components/CardList';
import styles from '../styles/ProfileStyle'; 

const ProfileScreen = ({onSignOut}) => {
  const [profileImage, setProfileImage] = useState('https://avatars.githubusercontent.com/u/87825150?v=4');
  const [cards, setCards] = useState(['Visa **** **** **** 1234']);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: false }, (response) => {
      if (response.didCancel) {
        console.log('Operación cancelada');
      } else if (response.error) {
        console.error(response.error);
      } else {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const addCard = () => {
    if (cardNumber) {
      setCards([...cards, `Tarjeta **** **** **** ${cardNumber.slice(-4)}`]);
      setCardNumber('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <ProfileHeader 
        profileImage={profileImage} 
        onImageChange={pickImage} 
      />

      <ScrollView style={styles.body}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <Text style={styles.infoLabel}>Fecha de nacimiento:</Text>
        <Text style={styles.infoValue}>15/03/1990</Text>

        <Text style={styles.sectionTitle}>Tarjetas Registradas</Text>
        <CardList cards={cards} />
        
        <Button title="Agregar tarjeta" onPress={() => setModalVisible(true)} style={styles.addCardButton} />

      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar tarjeta</Text>
            <TextInput
              style={styles.input}
              placeholder="Número de tarjeta"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
              maxLength={16}
            />
            <Button title="Agregar" onPress={addCard} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#ff4d4d" />
          </View>
        </View>
      </Modal>
      <Pressable style={styles.logout} onPress={async () => {
          try {
              await onSignOut();
          } catch (error) {
              console.error('Error', error);
          }
      }}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
