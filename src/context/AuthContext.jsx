import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwtDecode(token);
            setIsAuth(true);
            setUser(decoded);
        }

        setStatus('done');
    }, []);

    function login(token, userInfo) {
        localStorage.setItem('token', token);
        setIsAuth(true);
        setUser(userInfo);
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuth(false);
        setUser(null);
        setStatus('done');
    }

    const contextData = {
        isAuth,
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {status === 'done' && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);