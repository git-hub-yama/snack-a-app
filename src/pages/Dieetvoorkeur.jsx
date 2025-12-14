import React, { useState } from 'react';
import './Dieetvoorkeur.css';
import { useNavigate } from 'react-router-dom';
import DietList from '../components/DietList';

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
    const [geselecteerd, setGeselecteerd] = useState(
        localStorage.getItem('dieetvoorkeur') || ''
    );

    function toggleVoorkeur(dieet) {
        const nieuwe = geselecteerd === dieet ? '' : dieet;
        setGeselecteerd(nieuwe);
        localStorage.setItem('dieetvoorkeur', nieuwe);
    }

    return (
        <div className="dieetvoorkeur-wrapper">
            <h2>Wat is je dieetvoorkeur?</h2>

            <DietList
                options={dieetOpties}
                selected={geselecteerd}
                onToggle={toggleVoorkeur}
            />

            <button onClick={() => navigate('/')}>Terug naar home</button>
        </div>
    );
}

export default Dieetvoorkeur;