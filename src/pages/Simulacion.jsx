import React from 'react';
import '../App.css';

function Simulacion() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Simulación y generación de datos</h1>
        <p>
          Aquí se ejecuta un job simulado que genera datos de tráfico en tiempo real.
        </p>
        <button className="cta-button" onClick={() => alert('Simulación iniciada')}>
          Iniciar simulación
        </button>
      </div>
    </div>
  );
}

export default Simulacion;
