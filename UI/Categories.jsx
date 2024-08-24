import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import styles from '../styles/CategoriesStyle';


const Categories = () => {
  const categorias = [
    {
      id: 1,
      name: 'Electrónica',
      image: 'https://www.extrasoft.es/wp-content/uploads/2022/10/5-TECNOLOGIAS.png',
      productos: [
        { id: 1, name: 'Smartphone', image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b091eac4-c058-422b-b0a4-f6af0fbec30e.7dc52df101f58ffee0b862d5c608c227.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF', description: 'Smartphone de última generación con 128GB de almacenamiento.' },
        { id: 2, name: 'Televisor', image: 'https://images.samsung.com/is/image/samsung/p6pim/cl/un55au7090gxzs/gallery/cl-uhd-au7002-un55au7090gxzs-531097757?$650_519_PNG$', description: 'Televisor LED 4K UHD de 55 pulgadas.' },
        { id: 3, name: 'Auriculares', image: 'https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw94f28c43/JBL_Tune_Flex_Product%20Image_Hero%202_Black.png?sw=680&sh=680', description: 'Auriculares Bluetooth con cancelación de ruido.' },
      ],
    },
    {
      id: 2,
      name: 'Moda',
      image: 'https://www.idiomasparaninos.com/images/es/ropa.png',
      productos: [
        { id: 1, name: 'Camiseta', image: 'https://i.pinimg.com/originals/b2/32/4a/b2324a5a005d58b48adc71cd74162a47.png', description: 'Camiseta de algodón con estampado gráfico.' },
        { id: 2, name: 'Pantalones', image: 'https://i.pinimg.com/originals/40/7b/6f/407b6fddb8cf3fee35af33c7d416f7cb.png', description: 'Pantalones de mezclilla ajustados.' },
        { id: 3, name: 'Zapatillas', image: 'https://www.mizunoargentinastore.com/images/colecciones/zapatos/correr/hombres_Mizuno_agridulce_blanco_1y00_zapatilla_para_correr_wave_rider_RD8N231.png', description: 'Zapatillas deportivas para correr.' },
      ],
    },
    {
      id: 3,
      name: 'Hogar',
      image: 'https://tisera.com/images/uploads/categoria-muebles-de-hogar.png',
      productos: [
        { id: 1, name: 'Sofá', image: 'https://via.placeholder.com/80', description: 'Sofá de 3 plazas en color gris.' },
        { id: 2, name: 'Mesa de centro', image: 'https://via.placeholder.com/80', description: 'Mesa de centro de madera con acabado en roble.' },
        { id: 3, name: 'Lámpara', image: 'https://via.placeholder.com/80', description: 'Lámpara de pie moderna con luz LED.' },
      ],
    },
    {
      id: 4,
      name: 'Juguetes',
      image: 'https://via.placeholder.com/80',
      productos: [
        { id: 1, name: 'Muñeca', image: 'https://via.placeholder.com/80', description: 'Muñeca con ropa y accesorios intercambiables.' },
        { id: 2, name: 'Peluche', image: 'https://via.placeholder.com/80', description: 'Peluche de oso suave y tierno.' },
        { id: 3, name: 'Auto de juguete', image: 'https://via.placeholder.com/80', description: 'Auto de juguete a control remoto.' },
      ],
    },
    {
      id: 5,
      name: 'Deportes',
      image: 'https://via.placeholder.com/80',
      productos: [
        { id: 1, name: 'Balón de fútbol', image: 'https://via.placeholder.com/80', description: 'Balón de fútbol oficial para partidos.' },
        { id: 2, name: 'Raqueta de tenis', image: 'https://via.placeholder.com/80', description: 'Raqueta de tenis profesional con cuerda resistente.' },
        { id: 3, name: 'Guantes de boxeo', image: 'https://via.placeholder.com/80', description: 'Guantes de boxeo para entrenamiento y competición.' },
      ],
    },
  ];

  const [productosFiltrados, setProductosFiltrados] = useState(null);

  const handleCategoriaSeleccionada = (categoria) => {
    setProductosFiltrados(categoria.productos);
  };

  return (
    <ScrollView style={styles.container}>
      {!productosFiltrados ? (
        <>
          <Text style={styles.title}>Categorías</Text>
          <View style={styles.categoriasContainer}>
            {categorias.map((categoria) => (
              <Pressable
                key={categoria.id}
                style={({ pressed }) => [
                  styles.categoriaItem,
                  { backgroundColor: pressed ? '#e0e0e0' : '#ffffff' },
                ]}
                onPress={() => handleCategoriaSeleccionada(categoria)}
              >
                <Image source={{ uri: categoria.image }} style={styles.categoriaImage} />
                <Text style={styles.categoriaName}>{categoria.name}</Text>
              </Pressable>
            ))}
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Productos</Text>
          <Pressable
            style={styles.backButton}
            onPress={() => setProductosFiltrados(null)}
          >
            <Text style={styles.backButtonText}>Volver a Categorías</Text>
          </Pressable>
          <View style={styles.productosContainer}>
            {productosFiltrados.map((producto) => (
              <View key={producto.id} style={styles.productoItem}>
                <Image source={{ uri: producto.image }} style={styles.productoImage} />
                <View style={styles.productoInfo}>
                  <Text style={styles.productoName}>{producto.name}</Text>
                  <Text style={styles.productoDescription}>{producto.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};



export default Categories;