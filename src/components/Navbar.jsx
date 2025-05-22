import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Inicio</Link></li>
        <li className="navbar-item"><Link to="/problem">Problema</Link></li>
        <li className="navbar-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/arquitectura">Arquitectura</Link></li>
        <li className="navbar-item"><Link to="/simulacion">Simulación</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
