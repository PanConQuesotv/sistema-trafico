import React from 'react';
import 'App.css';

function Arquitectura() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Arquitectura del Sistema</h1>
        <p>
          Este sistema está diseñado para recolectar, procesar y visualizar datos de tráfico urbano.
        </p>
        <p>
          El diagrama de arquitectura mostrará cómo los módulos del sistema se comunican entre sí.
        </p>
        <button className="cta-button" onClick={() => alert('Aquí se mostrará el diagrama.')}>
          Ver Diagrama
        </button>
      </div>
    </div>
  );
}

export default Arquitectura;
