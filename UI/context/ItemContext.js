import React, { createContext, useReducer, useContext } from 'react';
import { itemsReducer, initialState } from './ItemReducer';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <ItemsContext.Provider value={{ items: state, addItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  return context;
};