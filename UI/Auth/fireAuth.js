import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore';

async function createUser(user,password,addressEmail,birthdate,address,selectedDepartment,selectedCity) {
    if( await verifyUser(user)){
        auth()
        .createUserWithEmailAndPassword(addressEmail, password)
        .then(userCredential => {
            const uid = userCredential.user.uid;
            return firestore()
                .collection('Users')  
                .doc(uid)             
                .set({
                    username: user.toLowerCase(),
                    birthdate: birthdate,
                    address: address,
                    department: selectedDepartment,
                    city: selectedCity,
                    email: addressEmail
                });
        })
        .then(() => {
            return Alert.alert('Registro exitoso','El usuario ha sido creado exitosamente.');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                return Alert.alert('Disculpa','El correo ya se encuentra en uso.');
            }
            if (error.code === 'auth/invalid-email') {
                return Alert.alert('ERROR','El correo es invalido.');
            }
                console.error(error); 
            }
        )
    }else{
        return Alert.alert('ERROR','Usuario ya existente.');
    }
    
}

async function verifyUser(user) {
    try {
        const querySnapshot = await firestore()
        .collection('Users')
        .where('username', '==', user)
        .get()
        
        if (!querySnapshot.empty) {
            return true; 
        } else {
            return false; 
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export { createUser };