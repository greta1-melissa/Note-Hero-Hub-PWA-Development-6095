import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const token = Cookies.get('admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (credentials) => {
    // Simple single-user authentication
    const { username, password } = credentials;
    
    if (username === 'notehero' && password === 'euan123') {
      // Set session cookie (expires in 24 hours)
      Cookies.set('admin_token', 'admin_session_token', { expires: 1 });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    Cookies.remove('admin_token');
    setIsAuthenticated(false);
  };

  const updatePassword = (newPassword) => {
    // In a real app, this would update the password securely
    console.log('Password updated for admin user');
    return true;
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      loading,
      login,
      logout,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};