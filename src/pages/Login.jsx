// src/pages/Login.jsx
import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Vul je e-mailadres en wachtwoord in.');
            return;
        }

        if (password.length < 6) {
            setError('Wachtwoord moet minimaal 6 tekens bevatten.');
            return;
        }

        setError('');
        onLogin(email);
    };

    return (
        <div className="login-container">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mailadres"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;