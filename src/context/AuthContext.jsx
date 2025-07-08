import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const token = Cookies.get('admin_token');
    const userData = Cookies.get('admin_user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        logout();
      }
    }
    
    setLoading(false);
  }, []);

  const login = (credentials) => {
    // Simple authentication - in production, use proper authentication
    const { username, password } = credentials;
    
    if (username === 'notehero' && password === 'euan123') {
      const userData = {
        id: 1,
        username: 'notehero',
        role: 'admin',
        loginTime: new Date().toISOString()
      };
      
      // Set session cookies (expires in 24 hours)
      Cookies.set('admin_token', 'admin_session_token', { expires: 1 });
      Cookies.set('admin_user', JSON.stringify(userData), { expires: 1 });
      
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    Cookies.remove('admin_token');
    Cookies.remove('admin_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updatePassword = (newPassword) => {
    // In production, this would update the database
    // For now, we'll just log the change
    console.log('Password updated for admin user');
    return true;
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      loading,
      login,
      logout,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};