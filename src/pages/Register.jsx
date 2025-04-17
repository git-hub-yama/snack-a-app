import React from 'react';
import './Register.css';

function Register({ onGoBack }) {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h2 className="centered">Registreren</h2>
                <form>
                    <input type="text" placeholder="Naam" />
                    <input type="email" placeholder="E-mailadres" />
                    <input type="password" placeholder="Wachtwoord" />
                    <button type="submit">Registreer nu</button>
                    <p className="centered">Al een account?</p>
                    <button type="button" onClick={onGoBack}>
                        terug naar login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;