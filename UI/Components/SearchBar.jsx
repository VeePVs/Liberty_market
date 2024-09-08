import React from "react";
import {TextInput} from 'react-native'
import styles from "../../styles/SearchBar";


export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const handleSearch = (text) => {
      setSearchQuery(text);
      if (onSearch) {
        onSearch(text);
      }
    };
  
    return (
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={"#000"}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={handleSearch}
        maxLength={30}
      />
    );
  }