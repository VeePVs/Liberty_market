/* eslint-disable react-native/no-inline-styles */
import { View, Text,TextInput, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ItemDetail';
import Stars from './Components/Stars';
import Animated from 'react-native-reanimated';
import HeartIcon from './Components/Heart';

export default function ItemDetail({route, navigation}) {

    const {id, name, price, description, features, image, questions, comments, favorite} = route.params;

    return (
        <SafeAreaView style={styles.containerItemDetail}>
            <ScrollView style={{width:'100%', alignContent: 'center'}}>
                <View style={styles.containerImage}>
                    <Animated.Image source={{uri: image, width: 300, height: 300}} style={{alignSelf:'center'}} sharedTransitionTag={`item-${id}`}/>
                    {console.log(favorite+" 222222222222222222222222")}
                    <HeartIcon isOn={favorite === 0 ? 'heart-o' : 'heart'}/>
                </View>
                    <Text style={styles.nameItem}>{name}</Text>
                <View style={styles.detailsItems}>
                    <Text style={styles.priceItem}>${price}</Text>
                    <Text style={styles.descriptionItem}>{description}</Text>
                    <Text style={{ color: '#000' }}>Se aceptan pagos por PSE, Efecty y tarjetas de crédito</Text>
                    <View>
                        {features.map((element, index) => (
                            <Text key={index} style={{ color: '#000' }}>
                                * {element}
                            </Text>
                        ))}
                    </View>
                </View>
                <View  style={styles.containerQC}>
                    <Text style={styles.questionsComments}>¿Tienes una pregunta del articulo?</Text>
                    <TextInput style={styles.inputQuestionsComments} maxLength={100}  numberOfLines={4} multiline placeholder="Haz tu mejor pregunta." placeholderTextColor={'#8a8a8a'}/>
                    <Text style={{color: '#000'}}>Preguntas ya realizadas: </Text>
                    <View>
                        {questions.map((element, index) => (
                            <Text key={index} style={{color: '#000'}}>
                                *{element}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={styles.containerQC}>
                    <Text style={styles.questionsComments}>Danos tu opinión</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Stars />
                        <Stars />
                        <Stars />
                        <Stars />
                        <Stars />
                    </View>
                    <TextInput style={styles.inputQuestionsComments} maxLength={200} numberOfLines={4} multiline placeholder="Escribe una opinión sincera, deja tu comentario." placeholderTextColor={"#8a8a8a"}/>
                    <Text style={{color: '#000'}}>Comentarios sobre el producto: </Text>
                    <View>
                        {comments.map((element, index) => (
                            <Text key={index} style={{color: '#000'}}>
                                *{element}
                            </Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
