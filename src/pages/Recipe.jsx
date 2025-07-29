import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './Recipe.css';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const { favorites, toggleFavorite } = useFavorites();

    // Check of dit recept al in de favorieten zit
    const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`
                );
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Fout bij ophalen recept:', error);
            }
        }

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <p>Bezig met laden...</p>;
    }

    return (
        <div className="recipe-container">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />

            <button onClick={() => toggleFavorite(recipe)} className="favorite-button">
                {isFavorite ? 'Verwijderen uit favorieten' : 'Toevoegen aan favorieten'}
            </button>
        </div>
    );
}

export default Recipe;