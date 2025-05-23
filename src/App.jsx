import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import Arquitectura from "./pages/Arquitectura";
import Simulacion from "./pages/Simulacion";
import Problem from "./pages/Problem"; // <-- Importa el componente nuevo
import ODSPanel from "./pages/ODSPanel";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/simulacion" element={<Simulacion />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/ODS" element={<ODSPanel />} />
      </Routes>
    </div>
  );
}


export default App;
