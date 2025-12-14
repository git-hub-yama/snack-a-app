import React from 'react';

function TopBar({ username, avatarUrl }) {
    return (
        <div className="top-bar">
            <h2 className="welcome">Hallo, {username}!</h2>
            <img
                src={avatarUrl || 'https://via.placeholder.com/60'}
                alt="Avatar"
                className="avatar"
            />
        </div>
    );
}

export default TopBar;