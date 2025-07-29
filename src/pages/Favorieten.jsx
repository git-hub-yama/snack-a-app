import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Favorieten.css";

function Favorieten() {
    const [search, setSearch] = useState("");
    const [favorites] = useState([
        { id: 1, title: "Pasta Bolognese", img: "https://via.placeholder.com/80" },
        { id: 2, title: "Vegetarische Curry", img: "https://via.placeholder.com/80" },
        { id: 3, title: "Zalm Teriyaki", img: "https://via.placeholder.com/80" },
    ]);

    const filteredFavorites = favorites.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="favorieten-container">
            <h2>Favorieten</h2>
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Zoek in favorieten..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="favorites-list">
                {filteredFavorites.map((item) => (
                    <div className="favorite-item" key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorieten;