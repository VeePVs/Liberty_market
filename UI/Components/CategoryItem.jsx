import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/CategoriesStyle';

const CategoryItem = ({ categorie, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.categorieItem,
        { backgroundColor: pressed ? '#e0e0e0' : '#ffffff' },
      ]}
      onPress={() => onPress(categorie)}
    >
      <Image source={{ uri: categorie.image }} style={styles.categorieImage} />
      <Text style={styles.categorieName}>{categorie.name}</Text>
    </Pressable>
  );
};

export default CategoryItem;
