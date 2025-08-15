import React, { useState } from 'react';
import './AccountBewerken.css';
import { useNavigate } from 'react-router-dom';
import femaleAvatar from '../assets/female-avatar.jpg';
import maleAvatar from '../assets/male-avatar.jpg';

function AccountBewerken() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        password: '',
        profilePhoto: '',
    });

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleAvatarSelect(imagePath) {
        setFormData(prev => ({
            ...prev,
            profilePhoto: imagePath
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSuccess(true);

        // Sla gegevens op in localStorage
        localStorage.setItem('username', formData.name);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('bio', formData.bio);
        localStorage.setItem('profilePhoto', formData.profilePhoto); // Belangrijk!

        // Navigeer terug naar Home na 2 seconden
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <div className="account-container">
            <h2>Account bewerken</h2>

            {success && <p className="success">Accountgegevens opgeslagen!</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Naam:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    E-mailadres:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Vertel iets over jezelf..."
                    />
                </label>

                <label>
                    Wachtwoord:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Nieuw wachtwoord"
                    />
                </label>

                <label>
                    Kies een profielfoto:
                    <div className="avatar-select">
                        <img
                            src={femaleAvatar}
                            alt="Vrouw"
                            onClick={() => handleAvatarSelect(femaleAvatar)}
                            className={formData.profilePhoto === femaleAvatar ? 'selected' : ''}
                        />
                        <img
                            src={maleAvatar}
                            alt="Man"
                            onClick={() => handleAvatarSelect(maleAvatar)}
                            className={formData.profilePhoto === maleAvatar ? 'selected' : ''}
                        />
                    </div>
                </label>

                <button type="submit" className="opslaan-knop">Opslaan</button>
            </form>
        </div>
    );
}

export default AccountBewerken;