// src/pages/Recipe.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeInfo = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=e1a59ee09f5240c99dd3df35ea75e581`
                );
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Fout bij ophalen receptinfo:', error);
            }
        };

        fetchRecipeInfo();
    }, [id]);

    if (!recipe) return <p>Recept wordt geladen...</p>;

    return (
        <div className="recipe-page">
            <h1 className="recipe-title">{recipe.title}</h1>

            <div className="recipe-top">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />

                <div className="ingredients-section">
                    <h3>Ingrediënten</h3>
                    <div className="ingredients-columns">
                        <ul>
                            {recipe.extendedIngredients?.slice(0, Math.ceil(recipe.extendedIngredients.length / 2)).map((item, index) => (
                                <li key={index}>{item.original}</li>
                            ))}
                        </ul>
                        <ul>
                            {recipe.extendedIngredients?.slice(Math.ceil(recipe.extendedIngredients.length / 2)).map((item, index) => (
                                <li key={index}>{item.original}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recipe-description">
                        <h3>Beschrijving</h3>
                        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;