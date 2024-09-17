import firestore from '@react-native-firebase/firestore';

const addUser = async (user,password,addressEmail,birthdate,address,selectedDepartment,selectedCity) => {
    try {
      const querySnapshot = await firestore().collection('Users').add(
        {
          user: user,
          password: password,
          email: addressEmail,
          birthdate: birthdate,
          address: address,
          deparment: selectedDepartment,
          city: selectedCity
        }
      )
        console.log("Agregado ")
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
    }
  };