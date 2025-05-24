import React, { useState } from 'react';
import '../App.css';

function Simulacion() {
  const [mostrarOverlay, setMostrarOverlay] = useState(false);

  const abrirOverlay = () => setMostrarOverlay(true);
  const cerrarOverlay = () => setMostrarOverlay(false);

  return (
    <div className="app">
      <div className="overlay">
        <h1>Simulación y generación de datos</h1>
        <p>
          En este módulo se simula la generación de datos en tiempo real mediante procesos por lotes o jobs. 
          Cada job representa una etapa del flujo de datos: generación, validación y almacenamiento.
        </p>
        <button className="cta-button" onClick={abrirOverlay}>
          Ver detalle de los jobs
        </button>
      </div>

      {mostrarOverlay && (
        <div className="modal-overlay" onClick={cerrarOverlay}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={cerrarOverlay}>×</button>
            <h2>Detalle de los Jobs</h2>
            <ul className="job-list">
              <li>
                <img src="https://i.ibb.co/sdrKX1Yj/0101010101.jpg" alt="Job 1" />

              </li>
              <li>
                <img src="https://i.ibb.co/Kc7FP88j/020202020202002.jpg" alt="Job 2" />

              </li>
              <li>
                <img src="https://i.ibb.co/nsKjj3sc/0303030303030.jpg" alt="Job 3" />

              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Simulacion;
