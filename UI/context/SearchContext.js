import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (query, items) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredItems(items);
        } else {
            const filteredData = items.filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase()) || 
                item.description.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filteredData);
        }
    };

    return (
        <SearchContext.Provider value={{ searchQuery, handleSearch, filteredItems, setFilteredItems }}>
            {children}
        </SearchContext.Provider>
    );
};
