import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ query, onQueryChange, onSearch }) {
    return (
        <div className="search-wrapper">
            <input
                type="text"
                placeholder="Zoek naar een recept..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
            />
            {query && (
                <button type="button" onClick={onSearch} className="search-btn">
                    <FaSearch />
                </button>
            )}
        </div>
    );
}

export default SearchBar;