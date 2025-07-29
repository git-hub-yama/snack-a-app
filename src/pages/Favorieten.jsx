import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './Favorieten.css';

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
                    placeholder="🔍 Zoek in favorieten"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="zoekbalk"
                />

                {filteredFavorites.length === 0 ? (
                    <p>Geen resultaten gevonden.</p>
                ) : (
                    <ul className="favorieten-lijst">
                        {filteredFavorites.map((recipe) => (
                            <li key={recipe.id} className="favoriet-item">
                                <span>{recipe.title}</span>
                                <button
                                    onClick={() => removeFavorite(recipe.id)}
                                    className="verwijder-knop"
                                >
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}

export default Favorieten;