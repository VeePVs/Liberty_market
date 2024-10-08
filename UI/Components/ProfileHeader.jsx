import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/ProfileStyle'; 

const ProfileHeader = ({ profileImage, onImageChange }) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Pressable onPress={onImageChange} style={styles.changeImageButton}>
        <Text style={styles.changeImageText}>Cambiar imagen</Text>
      </Pressable>
      <Text style={styles.name}>Vee Pabuence</Text>
      <Text style={styles.email}>veepabuence@mail.com</Text>
    </View>
  );
};

export default ProfileHeader;
