import { useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="App">
            {showRegister ? (
                <Register onGoBack={() => setShowRegister(false)} />
            ) : (
                <Login onGoToRegister={() => setShowRegister(true)} />
            )}
        </div>
    );
}

export default App;