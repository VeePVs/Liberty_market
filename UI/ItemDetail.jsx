/* eslint-disable react-native/no-inline-styles */
import { View, Text,TextInput, ScrollView } from 'react-native';
import React, {useContext, useReducer} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ItemDetail';
import Stars from './Components/Stars';
import Animated from 'react-native-reanimated';
import HeartIcon from './Components/Heart';
import BuyButton from './Components/BuyButton';
import {ItemsContext} from './context/ItemContext';

const initialState = {
    rating: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RATING':
            return {...state, rating: action.payload};
        default: return state;
    }
}

function numFormat(num) {
    let array = num.toFixed(2).split('.');
    array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return array.join(',');
  }

export default function ItemDetail({route}) {
    const {id, name, price, description, features, image, questions, comments, favorite, discount} = route.params;
    const { addItem, items, updateCount } = useContext(ItemsContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    function findItem(items, id) {
        return items.some((item) => {
            if (parseInt(item.id) === parseInt(id)) {
                return true;
            }
            return false;
        });
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.containerItemDetail}>
                <View style={styles.containerImage}>
                    <Animated.Image source={{uri: image, width: 300, height: 300}} style={{alignSelf:'center'}} sharedTransitionTag={`item-${id}`}/>
                    <HeartIcon isOn={favorite}/>
                </View>
                    <Text style={styles.nameItem}>{name}</Text>
                <View style={styles.detailsItems}>
                        {discount != 0 ?
                            (<Text style={styles.price}>${numFormat(price)}</Text>)
                            : (<></>)
                        }
                    <View style={styles.containerPrice}>
                        <Text style={styles.priceText}>${discount != 0 ? numFormat((price - price * (discount * 0.01))) : numFormat(price)}</Text>
                        {discount != 0 ?
                            (<Text style={styles.discount}>{discount}% OFF</Text>)
                            : (<></>)
                            }
                    </View>
                    <Text style={styles.descriptionItem}>{description}</Text>
                    <Text style={{ color: '#000' }}>Se aceptan pagos por PSE, Efecty y tarjetas de crédito</Text>
                    <View>
                        {features.map((element, index) => (
                            <Text key={index} style={{ color: '#000' }}>
                                * {element}
                            </Text>
                        ))}
                    </View>
                    <BuyButton onPress={()=>{
                        if (!findItem(items, id)) {
                            addItem({id,name,price,image,discount, description, count: 1});
                        }else{
                            updateCount(id);
                        }
                    }}/>
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
                        {
                            [1,2,3,4,5].map((oneStar)=> (
                                <Stars key={oneStar}
                                    onPress={()=>{
                                        dispatch({type: 'SET_RATING', payload: oneStar});
                                    }}
                                    star={state.rating < oneStar ? 'star-o' : 'star'}
                                />
                            ))
                        }
                    </View>
                    <TextInput style={styles.inputQuestionsComments} maxLength={200} numberOfLines={4} editable={state.rating!==0 ? true : false} multiline placeholder="Escribe una opinión sincera, deja tu comentario. (recuerda primero calificar)" placeholderTextColor={"#8a8a8a"}/>
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
