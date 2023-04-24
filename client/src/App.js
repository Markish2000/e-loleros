import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
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