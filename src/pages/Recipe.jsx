import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './Recipe.css';
import RecipeHeader from '../components/RecipeHeader';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

    useEffect(() => {
        async function fetchRecipe() {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`
            );
            const data = await response.json();
            setRecipe(data);
        }
        fetchRecipe();
    }, [id]);

    if (!recipe) return <p>Laden...</p>;

    return (
        <>
            <RecipeHeader
                title={recipe.title}
                image={recipe.image}
                summary={recipe.summary}
            />

            <button
                onClick={() => toggleFavorite(recipe)}
                className="favorite-button"
            >
                {isFavorite ? 'Verwijderen uit favorieten' : 'Toevoegen aan favorieten'}
            </button>
        </>
    );
}

export default Recipe;