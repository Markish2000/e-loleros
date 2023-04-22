import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import Landing from './views/Lading/Landing';

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/landing" element={<Landing />}/>
    </Routes>
    </>
  )
}

export default App;