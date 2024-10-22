import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userUID, setUserUID] = useState('');

    

    return (
        <UserContext.Provider value={{ userUID, setUserUID }}>
            {children}
        </UserContext.Provider>
    );
};


