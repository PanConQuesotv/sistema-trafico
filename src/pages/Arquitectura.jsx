import React from 'react';
import '../App.css';

function Arquitectura() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Arquitectura del Sistema</h1>
        <p>
          Esta sección muestra el diagrama y la estructura del sistema de tráfico urbano.
        </p>
        <button className="cta-button" onClick={() => alert('Diagrama próximamente')}>
          Ver Diagrama
        </button>
      </div>
    </div>
  );
}

export default Arquitectura;
