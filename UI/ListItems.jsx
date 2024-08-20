import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Item from './Components/Item';
import styles from '../styles/globalStyles';

export default function ListItems() {

    const items = [
        {
            price: 299999,
            name: 'Smartphone Samsung Galaxy A52',
            description: 'Smartphone con pantalla de 6.5", 128GB de almacenamiento y cámara de 64MP.',
            image: "https://m.media-amazon.com/images/I/418-u5vcIwL.jpg",
            features: [
                'Pantalla Super AMOLED de 6.5 pulgadas',
                'Procesador Octa-Core',
                'Batería de 4500 mAh',
                'Resistente al agua y al polvo (IP67)',
                '4GB de RAM'
            ]
        },
        {
            price: 1599999,
            name: 'Laptop Dell Inspiron 15 3000',
            description: 'Laptop con procesador Intel Core i5, 8GB RAM, 256GB SSD.',
            image: "https://asyscomputadores.com/wp-content/uploads/2021/03/Portatil-Dell-Inspiron-15-3505.jpg",
            features: [
                'Pantalla Full HD de 15.6 pulgadas',
                'Procesador Intel Core i5 de 11va generación',
                '256GB SSD para almacenamiento rápido',
                'Windows 10 preinstalado',
                'Batería de larga duración'
            ]
        },
        {
            price: 129999,
            name: 'Smartwatch Xiaomi Mi Band 6',
            description: 'Pulsera inteligente con monitoreo de actividad física y frecuencia cardíaca.',
            image: "https://exitocol.vtexassets.com/arquivos/ids/10553535/smartband-xiaomi-mi-band-6-smartwatch-amoled-bt5-fitness-future.jpg?v=637703440171900000",
            features: [
                'Pantalla AMOLED de 1.56 pulgadas',
                'Monitoreo del sueño y estrés',
                'Resistente al agua hasta 50 metros',
                'Notificaciones de llamadas y mensajes',
                '14 días de duración de batería'
            ]
        },
        {
            price: 79999,
            name: 'Auriculares Bluetooth Sony WH-CH510',
            description: 'Auriculares inalámbricos con sonido de alta calidad y batería de larga duración.',
            image: "https://exitocol.vtexassets.com/arquivos/ids/16068870/audifonos-bluetooth-inalambricos-sony-wh-ch510-azul-con-funcion-manos-libres.jpg?v=638079481383170000",
            features: [
                'Conectividad Bluetooth 5.0',
                'Hasta 35 horas de duración de batería',
                'Micrófono integrado para llamadas manos libres',
                'Diseño ligero y cómodo',
                'Carga rápida: 10 min de carga para 90 min de uso'
            ]
        },
        {
            price: 24999,
            name: 'Parlante Bluetooth JBL GO 2',
            description: 'Parlante portátil con sonido de alta calidad y resistente al agua.',
            image: "https://http2.mlstatic.com/D_NQ_NP_741122-MLA46444282428_062021-O.webp",
            features: [
                'Sonido JBL Signature',
                'Resistencia al agua IPX7',
                'Batería de hasta 5 horas de duración',
                'Conectividad Bluetooth 4.1',
                'Diseño compacto y portátil'
            ]
        },
        {
            price: 139999,
            name: 'Tablet Amazon Fire HD 8',
            description: 'Tablet con pantalla HD de 8", 32GB de almacenamiento y Alexa integrado.',
            image: "https://m.media-amazon.com/images/G/01/kindle/journeys/MGVhYmUyMjAt/MGVhYmUyMjAt-NjM4NmZlN2Et._CB658972813_.jpg",
            features: [
                'Pantalla HD de 8 pulgadas',
                '32GB de almacenamiento interno',
                'Alexa integrado para comandos de voz',
                'Hasta 12 horas de duración de batería',
                'Cámara frontal y trasera'
            ]
        },
        {
            price: 59999,
            name: 'Cámara de Seguridad Xiaomi Mi Home 360',
            description: 'Cámara de seguridad con visión nocturna y detección de movimiento.',
            image: "https://conectamos.shop/wp-content/uploads/2022/06/xiaomi_mi_360_home_security_camera_2k_01_l.jpg",
            features: [
                'Resolución Full HD 1080p',
                'Visión nocturna infrarroja',
                'Rotación 360 grados',
                'Detección de movimiento',
                'Almacenamiento en la nube'
            ]
        },
        {
            price: 99999,
            name: 'Audífonos In-Ear Apple AirPods (2da Generación)',
            description: 'Audífonos inalámbricos con chip H1 y estuche de carga.',
            image: "https://mac-center.com/cdn/shop/files/IMG-4814081_10baf2b7-1a80-4970-b191-34fb1f6f8821.jpg?v=1709568183&width=1445",
            features: [
                'Chip H1 para mejor conectividad',
                'Hasta 5 horas de reproducción continua',
                'Estuche de carga para 24 horas adicionales',
                'Compatible con Siri',
                'Sonido de alta calidad'
            ]
        },
        {
            price: 179999,
            name: 'Reloj Inteligente Fitbit Versa 2',
            description: 'Reloj inteligente con monitor de actividad, ritmo cardíaco y Alexa integrada.',
            image: "https://http2.mlstatic.com/D_NQ_NP_626839-MCO43656810937_102020-O.webp",
            features: [
                'Pantalla AMOLED',
                'Monitoreo del sueño y actividad física',
                'Alexa integrada',
                'Resistente al agua hasta 50 metros',
                'Batería de hasta 6 días'
            ]
        },
        {
            price: 44999,
            name: 'Cargador Inalámbrico Samsung EP-P1300',
            description: 'Cargador inalámbrico rápido compatible con varios dispositivos.',
            image: "https://vasilperu.com/wp-content/uploads/2021/12/cargador-inalambrico-aaa.jpg",
            features: [
                'Carga rápida de hasta 9W',
                'Compatible con dispositivos Qi',
                'Diseño compacto y delgado',
                'Indicador LED de estado',
                'Seguridad contra sobrecarga'
            ]
        }
    ];
    

  return (
        <SafeAreaView style={styles.containerListItems}>
            <FlatList 
                data={items}
                renderItem={({item}) => <Item name={item.name} description={item.description} price={item.price} image={item.image}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}