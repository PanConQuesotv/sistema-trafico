import React from 'react';
import '../App.css'; // Asegúrate de tener la ruta correcta según tu estructura

function Dashboard() {
    
  return (
    <div className="app">
      <div className="overlay">
        <h1>Tablero de Control</h1>
        <p>
          Aquí se visualizarán los datos del tráfico urbano en tiempo real.
        </p>
        <button className="cta-button" onClick={() => alert('Aquí se integrará un panel visual o gráfico.')}>
          Ver Datos en Tiempo Real
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
