import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import ShopPage from './views/ShopPage';
import CampionsPage from './views/ChampionsPage';
import { useThemeContext, useThemeToggleContext } from './context/ThemeContext';

const App = () => {
  const location = useLocation();

  const theme = useThemeContext();
  const handleThemeChange = useThemeToggleContext();

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
