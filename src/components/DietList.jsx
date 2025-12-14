import React from 'react';

function DietList({ options, selected, onToggle }) {
    return (
        <ul className="dieet-lijst">
            {options.map((optie) => (
                <li
                    key={optie.naam}
                    title={optie.uitleg}
                    className={`dieet-item ${selected === optie.naam ? 'actief' : ''}`}
                    onClick={() => onToggle(optie.naam)}
                >
                    {selected === optie.naam ? '❌' : '⬜'} {optie.naam}
                </li>
            ))}
        </ul>
    );
}

export default DietList;