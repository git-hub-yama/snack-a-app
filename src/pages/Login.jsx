import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';
import { jwtDecode } from 'jwt-decode';

function Login({ onGoToRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: username,   // belangrijk: geen email!
                    password: password,
                }
            );

            console.log('Login response:', response.data);
            const token = response.data.accessToken;
            const decodedUser = jwtDecode(token);
            login(token, decodedUser);
            navigate('/');
        } catch (error) {
            console.error('Login mislukt:', error.response?.data || error.message);
            setError('Inloggen mislukt. Controleer je gegevens.');
        }
    }

    return (
        <div className="login-container">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Gebruikersnaam"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log in</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
            <p>Nog geen account?</p>
            <button onClick={onGoToRegister}>Registreren</button>
        </div>
    );
}

export default Login;