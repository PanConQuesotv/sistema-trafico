import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import Arquitectura from './pages/Arquitectura';
import Simulacion from './pages/Simulacion';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <div className="overlay">
          {/* Aquí va el contenido central, puedes usar rutas si estás usando React Router */}
          <Inicio />
          {/* <Dashboard /> */}
          {/* <Arquitectura /> */}
          {/* <Simulacion /> */}
        </div>
      </div>
    </>
  );
}

export default App;
