import { useAuth } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Favorieten from './pages/Favorieten';
import { useState } from 'react';
import Dieetvoorkeur from './pages/Dieetvoorkeur';
import AccountBewerken from './pages/AccountBewerken';

function App() {
    const { isAuth } = useAuth();
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            {!isAuth ? (
                <div className="App">
                    {showRegister ? (
                        <Register onGoBack={() => setShowRegister(false)} />
                    ) : (
                        <Login onGoToRegister={() => setShowRegister(true)} />
                    )}
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                    <Route path="/favorieten" element={<Favorieten />} />
                    <Route path="/dieetvoorkeur" element={<Dieetvoorkeur />} />
                    <Route path="/account" element={<AccountBewerken />} />
                    <Route path="/" element={<Home key={Date.now()} />} />
                </Routes>
            )}
        </>
    );
}

export default App;