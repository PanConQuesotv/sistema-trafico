import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import Arquitectura from "./pages/Arquitectura";
import Simulacion from "./pages/Simulacion";
import Problem from "./pages/Problem";
import ODSPage from "./pages/ODSPage"; 
import Sistema from './pages/Sistema';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/simulacion" element={<Simulacion />} />
        <Route path="/ods" element={<ODSPage />} /> 
        <Route path="/sistema" element={<Sistema />} />
      </Routes>
    </div>
  );
}


export default App;
