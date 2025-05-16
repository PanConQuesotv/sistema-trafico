
import './App.css'


function App() {


  return (
    <div className="app"> {/* <-- Cambiado de 'app-container' a 'app' */}
      <div className="overlay">
        <h1>Sistema de Tráfico Urbano</h1>
        <p>
          Consulta datos reales de tráfico y analiza el comportamiento vehicular en tiempo real.
        </p>
        <button
          className="cta-button"
          onClick={() => alert("Próximamente: panel de visualización")}
        >
          Ver panel de datos
        </button>
      </div>
    </div>
  )
}

export default App
