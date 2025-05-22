import React from 'react';
import './Problem.css';

const Problem = () => {
  return (
    <div className="problem-section">
      <div className="overlay">
        <h1>Sistema de Análisis de Tráfico Urbano</h1>
        <p>Exploramos cómo los datos ayudan a resolver problemas reales en la ciudad.</p>

        <div className="problem-boxes">
          <div className="problem-box">
            <h2>Problema</h2>
            <p>
              La congestión vehicular en zonas escolares está aumentando el tiempo de traslado
              y disminuyendo la seguridad de los estudiantes.
            </p>
          </div>

          <div className="problem-box">
            <h2>Solución</h2>
            <p>
              Usar datos en tiempo real para ajustar semáforos, rutas escolares y horarios
              para mejorar el flujo vehicular y aumentar la seguridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
