import { View, FlatList } from 'react-native';
import React , {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from './Components/Item';
import styles from '../styles/globalStyles';

export default function ListItems({navigation, filteredItems, setFilteredItems}) {

    function detailItemFunction(id ,price, name, description, favorite, image, features, questions, comments,discount) {
        navigation.navigate('ItemDetail', {
            id: id,
            price: price,
            name: name,
            description: description,
            favorite: favorite,
            image: image,
            features: features,
            questions: questions,
            comments: comments,
            discount: discount,
        });
    }

    useEffect(() => {
        console.log(filteredItems)
        setFilteredItems(filteredItems)
        console.log(filteredItems)
    }, [filteredItems, setFilteredItems]); 

  return (
        <SafeAreaView style={styles.containerListItems} className="">
            <View className="w-full grid gap-1 grid-cols-2">
                <FlatList
                    data={filteredItems}
                    renderItem={({item}) => <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} questions={item.questions} comments={item.comments} discount={item.discount} onPress={()=>{
                        detailItemFunction(item.id,item.price, item.name, item.description, item.favorite, item.image, item.features, item.questions, item.comments, item.discount);
                    }}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}
