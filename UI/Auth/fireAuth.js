import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

async function createUser(newUser) {
    if( await verifyUser(newUser.user)){
        auth()
        .createUserWithEmailAndPassword(newUser.addressEmail, newUser.password)
        .then(userCredential => {
            const uid = userCredential.user.uid;
            return firestore()
                .collection('Users')
                .doc(uid)
                .set({
                    username: newUser.user.toLowerCase(),
                    birthdate: newUser.birthdate,
                    address: newUser.address,
                    department: newUser.selectedDepartment,
                    city: newUser.selectedCity,
                    email: newUser.addressEmail,
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
        );
    }else{
        return Alert.alert('ERROR','Usuario ya existente.');
    }
}

async function verifyUser(user) {
    try {
        const querySnapshot = await firestore()
        .collection('Users')
        .where('username', '==', user)
        .get();

        if (querySnapshot.empty) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verifyLogin(user, password) {
    try {
        const querySnapshot = await firestore()
        .collection('Users')
        .where('username', '==', user.toLowerCase())
        .get();
        if (!querySnapshot.empty) {
            auth().signInWithEmailAndPassword(querySnapshot.docs[0]._data.email, password);
            return true;
        }else{
            Alert.alert('Error', 'Contraseña o usuarios incorrectos.');
        }
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            Alert.alert('Error', 'Usuario no encontrado.');
        } else if (error.code === 'auth/wrong-password') {
            Alert.alert('Error', 'Contraseña incorrecta.');
        } else {
            Alert.alert('Error', 'Error al iniciar sesión: ' + error.message);
        }
        return false;
    }
}

export { createUser, verifyLogin };
