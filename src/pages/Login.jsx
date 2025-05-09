import React, { useState } from 'react';
import './Login.css';

function Login({ onGoToRegister, onLogin }) {
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
        <div className="login-wrapper">
            <div className="login">
                <h2 className="centered">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Log in</button>
                    {error && <p className="error">{error}</p>}
                    <p className="centered">Nog geen account?</p>
                    <button type="button" onClick={onGoToRegister}>
                        registreren
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;