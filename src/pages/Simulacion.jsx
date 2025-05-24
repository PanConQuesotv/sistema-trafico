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
                <p>Job 1: Generación sintética de datos de tráfico desde sensores simulados.</p>
              </li>
              <li>
                <img src="https://i.ibb.co/Kc7FP88j/020202020202002.jpg" alt="Job 2" />
                <p>Job 2: Validación de integridad y limpieza de los datos recibidos.</p>
              </li>
              <li>
                <img src="https://i.ibb.co/nsKjj3sc/0303030303030.jpg" alt="Job 3" />
                <p>Job 3: Carga en la base de datos y actualización del dashboard en tiempo real.</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Simulacion;
