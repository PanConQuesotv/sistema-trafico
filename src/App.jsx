import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import Arquitectura from './pages/Arquitectura';
import Simulacion from './pages/Simulacion';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/simulacion" element={<Simulacion />} />
      </Routes>
    </Router>
  );
}

export default App;
