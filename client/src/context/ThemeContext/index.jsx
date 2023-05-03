import React, { createContext, useState, useContext } from 'react'
import { lightTheme, darkTheme } from '../../themes/themes';

const themeContext = createContext();
const themeToggleContext = createContext();

export function useThemeContext () {
  return useContext(themeContext)
}

export function useThemeToggleContext () {
  return useContext(themeToggleContext)
}

const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState(darkTheme)

  const handleThemeChange = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <themeContext.Provider value={theme}>
      <themeToggleContext.Provider value={handleThemeChange}>
        {children}
      </themeToggleContext.Provider>
    </themeContext.Provider>
  )
}

export default ThemeContextProvider