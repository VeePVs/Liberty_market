import firestore from '@react-native-firebase/firestore';

const getItems = (setItems, setFilteredItems) => {
    const unsubscribe = firestore()
      .collection('Products')
      .onSnapshot(snapshot => {
        const itemsFromFirebase = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        }
      );
      setItems(itemsFromFirebase); 
      setFilteredItems(itemsFromFirebase);
    }, (error) => {
      console.error('Error al obtener los items de Firebase: ', error);
    });
    return unsubscribe;
};

 const getItem = async (id, setItem) => {
  const unsubscribe = await firestore()
  .collection('Products')
  .where('id', '==', parseInt(id))
  .onSnapshot(snapshot => {
      if (!snapshot.empty) {
          setItem(snapshot.docs[0].data());
      }
  });
    return unsubscribe;
};


export {getItems, getItem}