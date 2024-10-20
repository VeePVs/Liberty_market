import firestore from '@react-native-firebase/firestore';

const getItems = (setItems, setFilteredItems) => {
    const unsubscribe = firestore().collection('Products').onSnapshot(snapshot => {
      const itemsFromFirebase = snapshot.docs.map(doc => {
        console.log(doc.data())
        return { id: doc.id, ...doc.data() }; 
      });
      setItems(itemsFromFirebase); 
      setFilteredItems(itemsFromFirebase); 
    }, (error) => {
      console.error('Error al obtener los items de Firebase: ', error);
    });
  
    return unsubscribe; 
  };

export {getItems}

 