/* eslint-disable react-native/no-inline-styles */
import { View, Text,TextInput, ScrollView, Pressable, Alert, Image } from 'react-native';
import React, {useContext, useReducer, useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ItemDetail';
import Stars from './Components/Stars';
import Animated from 'react-native-reanimated';
import HeartIcon from './Components/Heart';
import BuyButton from './Components/BuyButton';
import auth from '@react-native-firebase/auth';
import {ItemsContext} from './context/ItemContext';
import { UserContext } from './context/UserContext';
import { deleteHeart, getItem, setHeart, getHeart, addQuestion, addComment, getComments, getQuestions } from './database/firestore';


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
    const {id, price,features} = route.params;
    const { addItem, items, updateCount } = useContext(ItemsContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [article, setArticle] = useState({})
    const [isFavorite, setIsFavorite] = useState(0);
    const [comment, setComment] = useState("");
    const [question, setQuestion] = useState("");
    const [comments, setComments] = useState([]);
    const [questions, setQuestions] = useState([]);

    
    async function handleAddComment() {
        if (comment !== '') {
            await addComment(article.id, comment);
            setComment("");
        } else {
            Alert.alert('ERROR', 'No puedes enviar comentarios vacios.');
        }
    }
    
    async function handleAddQuestion() {
        if (question !== '') {
            await addQuestion(article.id, question);
            setQuestion("");
        } else {
            Alert.alert('ERROR', 'No puedes enviar preguntas vacias.');
        }
    }
    useEffect(() => {
        const unsubscribe = getComments(id, setComments);
        return () => unsubscribe();
      }, [id]);

      useEffect(() => {
        const unsubscribe = getQuestions(id, setQuestions);
        return () => unsubscribe();
      }, [id]);

    useEffect(() => {
        const unsubscribe = getItem(id,setArticle);
        return () => unsubscribe;
      }, [id]);


    useEffect(() => {
        const user = auth().currentUser.uid;
        if (user) {
          getHeart(id, user, setIsFavorite);
        }
    }, [id]);

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
        if (article.favorite.length == 0) {
            setHeart(product.id, auth().currentUser.uid)
            return 1;
        } 
        article.favorite.map(favorite => {
            if (favorite == auth().currentUser.uid) {
                deleteHeart(product.id, auth().currentUser.uid);
                return 0;
            } else{
                setHeart(product.id, auth().currentUser.uid);
                return 1;
            }
        });
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.containerItemDetail}>
                <View style={styles.containerImage}>
                {article.image ? (
                    <Image source={{ uri: article.image, width: 300, height: 300 }} style={{ alignSelf: 'center' }} sharedTransitionTag={`item-${id}`} />
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
                        {article.discount != 0 ?
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
                    <TextInput style={styles.inputQuestionsComments} value={question} maxLength={100}  numberOfLines={4} onChangeText={text => setQuestion(text)} multiline placeholder="Haz tu mejor pregunta." placeholderTextColor={'#8a8a8a'}/>
                    
                    <Pressable style={styles.buttonQ} onPress={handleAddQuestion}>
                        <Text style={styles.buttonTextQ}>Realiza tu pregunta</Text>
                    </Pressable>
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
                    
                    <TextInput style={styles.inputQuestionsComments} value={comment} maxLength={200} onChangeText={text => setComment(text)} numberOfLines={4} editable={state.rating!==0 ? true : false} multiline placeholder="Escribe una opinión sincera, deja tu comentario. (recuerda primero calificar)" placeholderTextColor={"#8a8a8a"}/>
                    {state.rating !== 0 ?
                        <Pressable style={styles.buttonC} onPress={handleAddComment}>
                            <Text style={styles.buttonTextC}>Agregar comentario</Text>
                        </Pressable>
                        :
                    ""}
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
