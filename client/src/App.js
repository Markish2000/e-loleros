import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { Suspense, useState } from 'react';
import { lightTheme, darkTheme } from './themes/themes';
import { Box, CssBaseline } from '@mui/material';
import ShopPage from './views/ShopPage';
import CampionsPage from './views/ChampionsPage';
import { CircularProgress } from '@mui/material';

const App = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(darkTheme);

  const handleThemeChange = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {location.pathname === '/' ? (
          <LandingPage />
        ) : (
          <NavBar handleThemeChange={handleThemeChange} />
        )}

        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/campions' element={<CampionsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

//Holitas
