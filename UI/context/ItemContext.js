import React, { createContext, useReducer, useContext } from 'react';
import { itemsReducer } from './ItemReducer';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateCount = (id) => {
    dispatch({type: 'UPDATE_COUNT', payload: {id}});
  };
  
  const updateSubtraction = (id) => {
    dispatch({type: 'UPDATE_SUBTRACTION', payload: {id}});
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem, updateCount, updateSubtraction }}>
      {children}
    </ItemsContext.Provider>
  );
};