import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './Favorieten.css';
import FavoriteList from '../components/FavoriteList';

function Favorieten() {
    const { favorites, removeFavorite } = useFavorites();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFavorites = favorites.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="favorieten-wrapper">
            <div className="favorieten-container">
                <h2>Favorieten</h2>

                <input
                    type="text"
                    placeholder="Zoek in favorieten"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="zoekbalk"
                />

                <FavoriteList
                    items={filteredFavorites}
                    onRemove={removeFavorite}
                />
            </div>
        </main>
    );
}

export default Favorieten;