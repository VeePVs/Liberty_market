import firestore, { arrayRemove, arrayUnion } from '@react-native-firebase/firestore';

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

const getHeart = (id_product, userUID, setFavoriteStatus) => {
  firestore()
    .collection('Products')
    .doc(String(id_product))
    .onSnapshot(snapshot => {
      if (snapshot.exists) {
        const favorites = snapshot.data().favorite || [];
        const isFavorite = favorites.includes(userUID);
        setFavoriteStatus(isFavorite ? 1 : 0); // Actualiza el estado directamente
      } else {
        setFavoriteStatus(0);
      }
    });
};

const setHeart = async (id_product, userUID) => {
  await firestore()
  .collection('Products')
  .doc(String(id_product))
  .update({
    'favorite': arrayUnion(userUID)
  })
  console.log(`Usuario ${userUID} agregado a los favoritos del producto ${id_product}`)
}

const deleteHeart = async (id_product, userUID) => {
  await firestore()
  .collection('Products')
  .doc(String(id_product))
  .update({
    'favorite': arrayRemove(userUID)
  })
  console.log(`Usuario ${userUID} eliminado de los favoritos del producto ${id_product}`)
}


export {getItems, getItem, setHeart, deleteHeart, getHeart}