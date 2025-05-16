import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/arquitectura">Arquitectura</Link></li>
        <li><Link to="/simulacion">Simulación</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
