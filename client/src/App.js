import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Lading/Landing";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
