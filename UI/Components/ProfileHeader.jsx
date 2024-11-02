import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/ProfileStyle'; 

const ProfileHeader = ({ profileImage, onImageChange, username, email, birthdate }) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Pressable onPress={onImageChange} style={styles.changeImageButton}>
        <Text style={styles.changeImageText}>Cambiar imagen</Text>
      </Pressable>
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ProfileHeader;
