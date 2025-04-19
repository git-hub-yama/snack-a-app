import React, { useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';

function Home({ userEmail }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=e1a59ee09f5240c99dd3df35ea75e581`
            );
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error('Zoeken mislukt:', error);
        }
    };

    return (
        <div className="home-wrapper">
            <div className="top-bar">
                <h2 className="welcome">Hallo, {userEmail}!</h2>
                <img
                    src="https://via.placeholder.com/60"
                    alt="Avatar"
                    className="avatar"
                />
            </div>

            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Zoek naar een recept..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <button onClick={handleSearch} className="search-btn">
                        <FaSearch />
                    </button>
                )}
            </div>

            {results.length > 0 && (
                <ul className="results">
                    {results.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

            <div className="button-bar">
                <button>Favorieten</button>
                <button>Dieet voorkeur</button>
                <button>Account bewerken</button>
                <button>Uitloggen</button>
            </div>
        </div>
    );
}

export default Home;