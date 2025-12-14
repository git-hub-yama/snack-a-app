import React from 'react';

function FavoriteList({ items, onRemove }) {
    if (items.length === 0) {
        return <p>Geen resultaten gevonden.</p>;
    }

    return (
        <ul className="favorieten-lijst">
            {items.map((recipe) => (
                <li key={recipe.id} className="favoriet-item">
                    <span>{recipe.title}</span>
                    <button
                        type="button"
                        onClick={() => onRemove(recipe.id)}
                        className="verwijder-knop"
                    >
                        ❌
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FavoriteList;