import React from 'react';

function ButtonBar({ buttons }) {
    return (
        <div className="button-bar">
            {buttons.map((btn) => (
                <button
                    key={btn.label}
                    type="button"
                    onClick={btn.onClick}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}

export default ButtonBar;