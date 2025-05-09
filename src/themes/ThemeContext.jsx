// src/themes/ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';
import themes from './themeConfig';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedMode = localStorage.getItem('darkMode') === 'true';
    
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme]);
    }
    
    setIsDarkMode(savedMode);
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
      localStorage.setItem('theme', themeName);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    
    // Apply corresponding theme
    if (newMode) {
      setCurrentTheme(themes.dark);
      localStorage.setItem('theme', 'dark');
    } else {
      setCurrentTheme(themes.light);
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme: currentTheme, 
      changeTheme, 
      isDarkMode, 
      toggleDarkMode,
      themes 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};