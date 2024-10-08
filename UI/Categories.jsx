import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/CategoriesStyle';
import CategoryItem from './Components/CategoryItem';
import ProductItem from './Components/ProductItemCategory';

const CategoriesScreen = () => {
  const categories = [
    {
      id: 1,
      name: 'Electrónica',
      image: 'https://www.extrasoft.es/wp-content/uploads/2022/10/5-TECNOLOGIAS.png',
      products: [
        {
          id: 1,
          name: 'Smartphone',
          image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b091eac4-c058-422b-b0a4-f6af0fbec30e.7dc52df101f58ffee0b862d5c608c227.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
          description: 'Smartphone de última generación con 128GB de almacenamiento.',
        },
        {
          id: 2,
          name: 'Televisor',
          image: 'https://images.samsung.com/is/image/samsung/p6pim/cl/un55au7090gxzs/gallery/cl-uhd-au7002-un55au7090gxzs-531097757?$650_519_PNG$',
          description: 'Televisor LED 4K UHD de 55 pulgadas.',
        },
        {
          id: 3,
          name: 'Auriculares',
          image: 'https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw94f28c43/JBL_Tune_Flex_Product%20Image_Hero%202_Black.png?sw=680&sh=680',
          description: 'Auriculares Bluetooth con cancelación de ruido.',
        },
      ],
    },
    {
      id: 2,
      name: 'Moda',
      image: 'https://www.idiomasparaninos.com/images/es/ropa.png',
      products: [
        {
          id: 1,
          name: 'Camiseta',
          image: 'https://i.pinimg.com/originals/b2/32/4a/b2324a5a005d58b48adc71cd74162a47.png',
          description: 'Camiseta de algodón con estampado gráfico.',
        },
        {
          id: 2,
          name: 'Pantalones',
          image: 'https://i.pinimg.com/originals/40/7b/6f/407b6fddb8cf3fee35af33c7d416f7cb.png',
          description: 'Pantalones de mezclilla ajustados.',
        },
        {
          id: 3,
          name: 'Zapatillas',
          image: 'https://www.mizunoargentinastore.com/images/colecciones/zapatos/correr/hombres_Mizuno_agridulce_blanco_1y00_zapatilla_para_correr_wave_rider_RD8N231.png',
          description: 'Zapatillas deportivas para correr.',
        },
      ],
    },
    {
      id: 3,
      name: 'Hogar',
      image: 'https://tisera.com/images/uploads/categoria-muebles-de-hogar.png',
      products: [
        {
          id: 1,
          name: 'Sofá',
          image: 'https://d3uq4j19mzp2q8.cloudfront.net/media/catalog/product/cache/8621219c249075fb49119b184b915f72/s/a/sala-moderna-sofa-beige-borbon_sal85977s1-itw_1.png',
          description: 'Sofá de 3 plazas en color gris.',
        },
        {
          id: 2,
          name: 'Mesa de centro',
          image: 'https://medias.maisonsdumonde.com/images/ar_1:1,c_pad,f_auto,q_auto,w_732/v1/mkp/M22087654_1/mesa-de-centro-de-madera-maciza-acabado-envejecido-de-120x45cm.jpg',
          description: 'Mesa de centro de madera con acabado en roble.',
        },
        {
          id: 3,
          name: 'Lámpara',
          image: 'https://www.eglo.com/media/wysiwyg/Bild-3-Bottom.png',
          description: 'Lámpara de pie moderna con luz LED.',
        },
      ],
    },
    {
      id: 4,
      name: 'Juguetes',
      image: 'https://www.maderandia.com/pic/revslider/general/juguete-caballito.png',
      products: [
        {
          id: 1,
          name: 'Muñeca',
          image: 'https://pepeganga.vtexassets.com/arquivos/ids/815371/100473879-1.png?v=637988527644170000',
          description: 'Muñeca con ropa y accesorios intercambiables.',
        },
        {
          id: 2,
          name: 'Peluche',
          image: 'https://peluchesfantasia.com/cdn/shop/products/peluche-oso-gigante-marron_1600x.png?v=1625041480',
          description: 'Peluche de oso suave y tierno.',
        },
        {
          id: 3,
          name: 'Auto de juguete',
          image: 'https://pepeganga.vtexassets.com/arquivos/ids/859000/29766200-1.png?v=638058745664170000?1723852800016',
          description: 'Auto de juguete a control remoto.',
        },
      ],
    },
    {
      id: 5,
      name: 'Deportes',
      image: 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-balls-sports-set-png-image_5901834.png',
      products: [
        {
          id: 1,
          name: 'Balón de fútbol',
          image: 'https://mikasasports.co.jp/e/wp-content/uploads/2016/07/SCB0078_01.png',
          description: 'Balón de fútbol oficial para partidos.',
        },
        {
          id: 2,
          name: 'Raqueta de tenis',
          image: 'https://wilsonstore.com.co/wp-content/uploads/2024/01/649cfe4aff8457591c0e937c_thumbnail.png',
          description: 'Raqueta de tenis profesional con cuerda resistente.',
        },
        {
          id: 3,
          name: 'Guantes de boxeo',
          image: 'https://caray.co/wp-content/uploads/2024/02/guante-de-boxeo-liga-competencia-blanco.png',
          description: 'Guantes de boxeo para entrenamiento y competición.',
        },
      ],
    },
  ];

  const [productsFiltered, setProductsFiltered] = useState(null);

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
