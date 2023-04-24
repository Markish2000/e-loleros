import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/homePage';
import LandingPage from './views/landingPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;