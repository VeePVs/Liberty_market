import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/CategoriesStyle';

const defaultImages = {
  electronica: 'https://www.extrasoft.es/wp-content/uploads/2022/10/5-TECNOLOGIAS.png',
  moda: 'https://www.idiomasparaninos.com/images/es/ropa.png',
  hogar: 'https://tisera.com/images/uploads/categoria-muebles-de-hogar.png',
  juguetes: 'https://www.maderandia.com/pic/revslider/general/juguete-caballito.png',
  deportes: 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-balls-sports-set-png-image_5901834.png',
};

const CategoryItem = ({ categorie, onPress }) => {
  const categoryImage = defaultImages[categorie.name.toLowerCase()] || 'default-image-url';

  return (
    <Pressable
      style={({ pressed }) => [
        styles.categorieItem,
        { backgroundColor: pressed ? '#e0e0e0' : '#ffffff' },
      ]}
      onPress={() => onPress(categorie)}
    >
      <Image source={{ uri: categoryImage }} style={styles.categorieImage} />
      <Text style={styles.categorieName}>{categorie.name}</Text>
    </Pressable>
  );
};

export default CategoryItem;
