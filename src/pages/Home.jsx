import React from 'react';
import './Home.css';

function Home({ userEmail }) {
    return (
        <div className="home-wrapper">
            <header className="home-header">
                <h2>Hallo, {userEmail}!</h2>
                <img
                    src="https://via.placeholder.com/100"
                    alt="Profielfoto"
                    className="profile-pic"
                />
            </header>

            <input
                type="text"
                placeholder="Zoek naar een recept..."
                className="zoekbalk"
            />

            <div className="menu">
                <button>Favorieten</button>
                <button>Dieet voorkeur</button>
                <button>Account bewerken</button>
                <button>Uitloggen</button>
            </div>
        </div>
    );
}

export default Home;