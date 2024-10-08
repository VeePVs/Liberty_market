import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/SearchBar';

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (onSearch) {
            onSearch(text);
        }
    };

    return (
        <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#000"
            value={searchQuery}
            onChangeText={handleSearch}
            maxLength={30}
        />
    );
}