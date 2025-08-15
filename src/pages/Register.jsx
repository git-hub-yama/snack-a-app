import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register({ onGoBack }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: email,
                    password: password,
                    username: name,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log('Registratie gelukt:', response.data);
            setSuccess(true);
            setError('');
        } catch (error) {
            console.error('Registratie mislukt:', error.response?.data || error.message);
            setError('Registratie mislukt. Probeer een ander e-mailadres of een langer wachtwoord.');
        }
    }

    return (
        <div className="register-container">
            <h2>Registreren</h2>
            {success ? (
                <>
                    <p>Account succesvol aangemaakt!</p>
                    <button onClick={onGoBack}>Terug naar login</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Gebruikersnaam"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord (min. 6 tekens)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Registreer nu</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            )}
        </div>
    );
}

export default Register;