/* eslint-disable react-native/no-inline-styles */
import { View, Text,TextInput, ScrollView } from 'react-native';
import React, {useContext, useReducer, useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ItemDetail';
import Stars from './Components/Stars';
import Animated from 'react-native-reanimated';
import HeartIcon from './Components/Heart';
import BuyButton from './Components/BuyButton';
import {ItemsContext} from './context/ItemContext';
import { UserContext } from './context/UserContext';
import { deleteHeart, getItem, setHeart, getHeart } from './database/firestore';


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
    const {userUID} = useContext(UserContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [article, setArticle] = useState({})
    const [isFavorite, setIsFavorite] = useState(0);

    useEffect(() => {
        const unsubscribe = getItem(id,setArticle);
        return () => unsubscribe;
      }, [id]);


    useEffect(() => {
    getHeart(id, userUID, setIsFavorite);
    }, [id, userUID]);

    function findItem(items, id) {
        return items.some((item) => {
            if (parseInt(item.id) === parseInt(id)) {
                return true;
            }
            return false;
        });
    }

    async function printHeart(product) {
        const article = await product;
        console.log(article)
        if (article.favorite.length == 0) {
            setHeart(product.id, userUID)
            console.log('10')
            return 1;
        } 
        article.favorite.map(favorite => {
            if (favorite == userUID) {
                deleteHeart(product.id, userUID)
                console.log('0')
                return 0;
            } else{
                setHeart(product.id, userUID)
                console.log('1')
                return 1;
            }
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.containerItemDetail}>
                <View style={styles.containerImage}>
                {article.image ? (
                    <Animated.Image source={{ uri: article.image, width: 300, height: 300 }} style={{ alignSelf: 'center' }} sharedTransitionTag={`item-${id}`} />
                ) : (
                    <Text>Imagen no disponible</Text>
                )}
                    <HeartIcon 
                        isOn={() => { printHeart(article); }}
                        getHeart={isFavorite}
                        />
                </View>
                    <Text style={styles.nameItem}>{article.name}</Text>
                <View style={styles.detailsItems}>
                        {discount != 0 ?
                            (<Text style={styles.price}>${numFormat(price)}</Text>)
                            : (<></>) 
                        }
                    <View style={styles.containerPrice}>
                        <Text style={styles.priceText}>${article.discount != 0 ? numFormat((article.price - article.price * (article.discount * 0.01))) : numFormat(article.price)}</Text>
                        {article.discount != 0 ?
                            (<Text style={styles.discount}>{article.discount}% OFF</Text>)
                            : (<></>)
                            }
                    </View>
                    <Text style={styles.descriptionItem}>{article.description}</Text>
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
                            addItem({id: article.id,name: article.name,price: article.price,image: article.image,discount: article.discount, description: article.description, count: 1});
                        }else{
                            updateCount(article.id);
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
