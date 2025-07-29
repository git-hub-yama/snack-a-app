import { useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Favorieten from './pages/Favorieten';
import { useState } from 'react';

function App() {
    const { isAuth, user } = useAuth();
    const [showRegister, setShowRegister] = useState(false);

    return (
        <Router>
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
                </Routes>
            )}
        </Router>
    );
}

export default App;