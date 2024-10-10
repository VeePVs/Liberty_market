import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { users } from '../database/users';

export const UserContext = createContext();

export const UserProvider = ({ children, setAuth }) => {
    const [user, setUser] = useState(users);

    const createTwoButtonAlert = (props) =>
        Alert.alert('Registro no valido', props, [
          {
            text: 'Cancelar',
            onPress: () => console.log('Continuar'),
            style: 'cancel',
          },
    ]);

    const verifyCredencials = (userID, passwordUser) => {
        if (user.find(us => us.username == userID) && user.find(us => us.password == passwordUser)) {
            setAuth(true);
        }else{
            createTwoButtonAlert('Usuario o clave invalidos, por favor intentar nuevamente.');
        }
    };

    return (
        <UserContext.Provider value={{ verifyCredencials, user, setUser, setAuth }}>
            {children}
        </UserContext.Provider>
    );
};


