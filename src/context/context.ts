import React, { createContext, useContext, useState, useEffect } from 'react';
]
// Define the shape of the authentication context
const AuthContext = createContext(null);

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  const history = useHistory();

  useEffect(() => {
    // Optionally, implement token refresh logic here
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.status === 200) {
        const token = await response.text();
        localStorage.setItem('user', JSON.stringify(username));
        localStorage.setItem('token', JSON.stringify(token));
        setUser(username);
        setToken(token);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
