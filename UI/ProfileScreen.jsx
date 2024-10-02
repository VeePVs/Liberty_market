import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../styles/ProfileStyle';

const ProfileScreen = () => {
  const profile = {
    name: 'Vee Pabuence',
    lastName: 'de los milagros',
    birthDate: '15/03/1990',
    profileImage: 'https://avatars.githubusercontent.com/u/87825150?v=4', 
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: profile.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.lastName}>{profile.lastName}</Text>
        <Text style={styles.label}>Fecha de nacimiento:</Text>
        <Text style={styles.info}>{profile.birthDate}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;