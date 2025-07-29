import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(recipe) {
        const exists = favorites.find((fav) => fav.id === recipe.id);
        if (exists) {
            setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
        } else {
            setFavorites([...favorites, recipe]);
        }
    }

    function removeFavorite(id) {
        setFavorites(favorites.filter((fav) => fav.id !== id));
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}