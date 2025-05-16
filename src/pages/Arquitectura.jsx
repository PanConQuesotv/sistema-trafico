import React from 'react';
import '../App.css'; // Asegúrate que este sea el CSS donde definiste `.app`, `.overlay`, etc.

function Arquitectura() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Arquitectura del Sistema</h1>
        <p>
          Este sistema está diseñado para recolectar, procesar y visualizar datos de tráfico urbano
          en tiempo real. A continuación, se presentará un diagrama (puede ser una imagen o SVG) que
          describe cómo se comunican los distintos componentes del sistema.
        </p>
        <p>
          En futuras versiones, este módulo se conectará a una base de datos SQL para almacenar y consultar
          información histórica de tráfico.
        </p>
        <button className="cta-button" onClick={() => alert('Aquí se mostrará el diagrama.')}>
          Ver Diagrama
        </button>
      </div>
    </div>
  );
}

export default Arquitectura;
