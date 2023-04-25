import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { lightTheme, darkTheme } from './themes/themes';
import { Box, CssBaseline } from '@mui/material';

const App = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeChange = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
        {location.pathname === '/' ? (
          <LandingPage />
        ) : (
          <NavBar handleThemeChange={handleThemeChange} />
        )}

        <Routes>
          <Route path='/home' element={<HomePage theme={theme} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
