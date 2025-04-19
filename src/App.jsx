import { useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    if (isLoggedIn) {
        return <Home userEmail={userEmail} />;
    }

    return (
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
    );
}

export default App;