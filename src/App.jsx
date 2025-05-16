import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Arquitectura from './pages/Arquitectura';
import Inicio from './pages/Inicio';
import Simulacion from './pages/Simulacion';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="overlay">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/simulacion" element={<Simulacion />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
