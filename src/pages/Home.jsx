import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import ButtonBar from '../components/ButtonBar';

function Home() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const [avatarUrl, setAvatarUrl] = useState('');

    const username =
        user?.username || localStorage.getItem('username') || 'gebruiker';

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
                `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${selectedDiet}&number=5&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`,
            );
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error('Zoeken mislukt:', error);
        }
    };

    return (
        <div className="home-wrapper">
            <TopBar username={username} avatarUrl={avatarUrl} />

            <SearchBar
                query={query}
                onQueryChange={setQuery}
                onSearch={handleSearch}
            />

            {results.length > 0 && (
                <ul className="results">
                    {results.map((item) => (
                        <li key={item.id}>
                            <Link to={`/recipe/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}

            <ButtonBar
                buttons={[
                    { label: 'Favorieten', onClick: () => navigate('/favorieten') },
                    { label: 'Dieet voorkeur', onClick: () => navigate('/dieetvoorkeur') },
                    { label: 'Account bewerken', onClick: () => navigate('/account') },
                    { label: 'Uitloggen', onClick: handleLogout },
                ]}
            />
        </div>
    );
}

export default Home;