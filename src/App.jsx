
import './App.css'


function App() {


  return (
    <div className="app-container">
      <div className="overlay">
        <h1>Sistema de Monitoreo de Tráfico Urbano</h1>
        <p>
          Visualiza, analiza y toma decisiones inteligentes con datos de tráfico en tiempo real.
        </p>
        <button onClick={() => alert("Próximamente: panel de visualización")}>
          Ver panel de datos
        </button>
      </div>
    </div>
  )
}

export default App
