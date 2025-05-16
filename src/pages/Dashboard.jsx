import React from 'react';
import '../App.css'; // Asegúrate de que el archivo App.css tenga los estilos que te di

function Dashboard() {
    
  return (
    <div className="app">
      <div className="overlay">
        <h1>Tablero de Control</h1>
        <p>Aquí se visualizarán los datos del tráfico urbano en tiempo real.</p>
        <button
          className="cta-button"
          onClick={() => alert('Próximamente: visualización en tiempo real.')}
        >
          Ver Mapa de Tráfico
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
