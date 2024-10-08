export const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_COUNT':
      return state.map(item => 
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
      );
      case 'UPDATE_SUBTRACTION':
      return state.map(item => 
        item.id === action.payload.id
          ? { ...item, count: item.count - 1 }
          : item
      );
    default:
      return state;
  }
};
