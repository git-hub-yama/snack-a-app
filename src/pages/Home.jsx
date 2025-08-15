import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const savedPhoto = localStorage.getItem('profilePhoto');
        if (savedPhoto) {
            setAvatarUrl(savedPhoto);
        }
    }, []);

    function handleLogout() {
        logout();
        navigate('/');
    }

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            const selectedDiet = localStorage.getItem('dieetvoorkeur');
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${selectedDiet}&number=5&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`
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
                <h2 className="welcome">Hallo, {user?.username || localStorage.getItem('username')}!</h2>
                <img
                    src={avatarUrl || 'https://via.placeholder.com/60'}
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
                        <Link to={`/recipe/${item.id}`} key={item.id}>
                            <li>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            )}

            <div className="button-bar">
                <button onClick={() => navigate('/favorieten')}>Favorieten</button>
                <button onClick={() => navigate('/dieetvoorkeur')}>Dieet voorkeur</button>
                <button onClick={() => navigate('/account')}>Account bewerken</button>
                <button onClick={handleLogout}>Uitloggen</button>
            </div>
        </div>
    );
}

export default Home;