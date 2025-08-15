import React, { useState, useEffect } from 'react';
import './Dieetvoorkeur.css';
import { useNavigate } from 'react-router-dom';

const dieetOpties = [
    { naam: 'vegetarian', uitleg: 'Geen vlees of vis' },
    { naam: 'vegan', uitleg: 'Geen dierlijke producten (dus ook geen ei of zuivel)' },
    { naam: 'gluten free', uitleg: 'Zonder gluten (voor mensen met glutenintolerantie/coeliakie)' },
    { naam: 'ketogenic', uitleg: 'Weinig koolhydraten, veel vetten (keto)' },
    { naam: 'pescetarian', uitleg: 'Geen vlees, wel vis en andere dierlijke producten' },
    { naam: 'paleo', uitleg: 'Eetpatroon als ‘jager-verzamelaar’: geen granen, peulvruchten, zuivel, etc.' },
    { naam: 'primal', uitleg: 'Lijkt op paleo, maar zuivel is wél toegestaan' },
    { naam: 'low fodmap', uitleg: 'Minder complexe suikers (voor mensen met PDS/prikkelbare darm)' },
    { naam: 'whole30', uitleg: '30 dagen lang alleen onbewerkte voeding, zonder suikers, granen, zuivel' },
];

function Dieetvoorkeur() {
    const navigate = useNavigate();
    const [geselecteerd, setGeselecteerd] = useState(localStorage.getItem('dieetvoorkeur') || '');

    const toggleVoorkeur = (dieet) => {
        const nieuweVoorkeur = geselecteerd === dieet ? '' : dieet;
        setGeselecteerd(nieuweVoorkeur);
        localStorage.setItem('dieetvoorkeur', nieuweVoorkeur);
    };

    return (
        <div className="dieetvoorkeur-wrapper">
            <h2>Wat is je dieetvoorkeur?</h2>
            <ul className="dieet-lijst">
                {dieetOpties.map((optie) => (
                    <li
                        key={optie.naam}
                        title={optie.uitleg}
                        className={`dieet-item ${geselecteerd === optie.naam ? 'actief' : ''}`}
                        onClick={() => toggleVoorkeur(optie.naam)}
                    >
                        {geselecteerd === optie.naam ? '❌' : '⬜'} {optie.naam}
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/')}>Terug naar home</button>
        </div>
    );
}

export default Dieetvoorkeur;