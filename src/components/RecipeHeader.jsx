import React from 'react';

function RecipeHeader({ title, image, summary }) {
    return (
        <div className="recipe-page">
            <h2 className="recipe-title">{title}</h2>
            <img src={image} alt={title} className="recipe-image" />
            <p
                className="recipe-description"
                dangerouslySetInnerHTML={{ __html: summary }}
            />
        </div>
    );
}

export default RecipeHeader;