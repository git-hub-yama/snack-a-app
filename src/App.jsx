import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    return (
        <Router>
            {!isLoggedIn ? (
                <div className="App">
                    {showRegister ? (
                        <Register onGoBack={() => setShowRegister(false)} />
                    ) : (
                        <Login
                            onGoToRegister={() => setShowRegister(true)}
                            onLogin={(email) => {
                                setUserEmail(email);
                                setIsLoggedIn(true);
                            }}
                        />
                    )}
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home userEmail={userEmail} />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;