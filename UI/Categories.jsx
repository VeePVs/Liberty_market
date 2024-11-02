import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from '../styles/CategoriesStyle';
import CategoryItem from './Components/CategoryItem';
import ProductItem from './Components/ProductItemCategory';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = [
        {
          id: 1,
          name: 'Electronica',
          image: 'https://www.extrasoft.es/wp-content/uploads/2022/10/5-TECNOLOGIAS.png',
        },
        {
          id: 2,
          name: 'Moda',
          image: 'https://www.idiomasparaninos.com/images/es/ropa.png',
        },
        {
          id: 3,
          name: 'Hogar',
          image: 'https://tisera.com/images/uploads/categoria-muebles-de-hogar.png',
        },
        {
          id: 4,
          name: 'Juguetes',
          image: 'https://www.maderandia.com/pic/revslider/general/juguete-caballito.png',
        },
        {
          id: 5,
          name: 'Deportes',
          image: 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-balls-sports-set-png-image_5901834.png',
        },
      ];

      const productsSnapshot = await firestore().collection('Products').get();
      const productsData = productsSnapshot.docs.map((doc) => doc.data());

      const updatedCategories = categoriesData.map((category) => ({
        ...category,
        products: productsData.filter((product) => product.category === category.name.toLowerCase()),
      }));

      setCategories(updatedCategories);
    };

    fetchCategories();
  }, []);

  const handleCategorySelected = (category) => {
    setProductsFiltered(category.products);
  };
  return (
    <ScrollView style={styles.container}>
      {!productsFiltered ? (
        <>
          <Text style={styles.title}>Categorías</Text>
          <View style={styles.categorieContainer}>
            {categories.map((categorie) => (
              <CategoryItem key={categorie.id} categorie={categorie} onPress={handleCategorySelected} />
            ))}
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Productos</Text>
          <Pressable
            style={styles.backButton}
            onPress={() => setProductsFiltered(null)}
          >
            <Text style={styles.backButtonText}>Volver a Categorías</Text>
          </Pressable>
          <View style={styles.productContainer}>
            {productsFiltered.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default CategoriesScreen;
