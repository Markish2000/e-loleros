import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useThemeContext, useThemeToggleContext } from './context/ThemeContext';
import Footer from './components/Footer';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import AboutPage from './views/AboutPage';
import ShopRouter from './routers/shop';
import Error404Page from './views/Error404Page';
import ChampionsRouter from './routers/champions';

const App = () => {
  const location = useLocation();

  const theme = useThemeContext();
  const handleThemeChange = useThemeToggleContext();

  const isLadingPage = location.pathname !== '/';
  const isLoginPage = location.pathname !== '/login';
  const isSignInPage = location.pathname !== '/signIn';

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
          <Route path='/shop/*' element={<ShopRouter />} />
          <Route path='/champions/*' element={<ChampionsRouter />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signIn' element={<RegisterPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<Error404Page />} />
        </Routes>
        {isLadingPage && isLoginPage && isSignInPage && <Footer />}
      </ThemeProvider>
    </>
  );
};

export default App;

//Holitas
