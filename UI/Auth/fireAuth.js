import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native'

function createUser(user,password,addressEmail,birthdate,address,selectedDepartment,selectedCity) {
    auth()
    .createUserWithEmailAndPassword(addressEmail, password)
    .then(()=> {
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
}

export { createUser };