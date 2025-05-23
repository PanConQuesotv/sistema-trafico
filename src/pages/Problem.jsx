import React, { useState } from 'react';
import './Problem.css';  // Importa los estilos específicos

function Problem() {
  const [activeBox, setActiveBox] = useState(null);

  return (
    <div className="app">
      <div className="overlay" style={{ maxWidth: '700px' }}>
        <h1>Definición del Problema</h1>
        <p>
          En las ciudades modernas, la congestión vehicular representa un desafío significativo para la movilidad.
        </p>

        <div className="boxes-container">
          <div className="box" onClick={() => setActiveBox('problem')}>
            <h2>Problemática</h2>
            <p>Descripción breve del problema de tráfico.</p>
          </div>

          <div className="box" onClick={() => setActiveBox('impact')}>
            <h2>Impacto Ambiental</h2>
            <p>Descripción breve del impacto ambiental.</p>
          </div>
        </div>
      </div>

      {activeBox && (
        <div className="modal-overlay" onClick={() => setActiveBox(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveBox(null)}>×</button>
            {activeBox === 'problem' && (
              <>
                <h2>Detalles de la Problemática</h2>
                <p>
                  La congestión vehicular genera pérdidas de tiempo y emisiones contaminantes. Es necesario analizar y mejorar el flujo en zonas críticas.
                </p>
              </>
            )}
            {activeBox === 'impact' && (
              <>
                <h2>Detalles del Impacto Ambiental</h2>
                <p>
                  Las emisiones vehiculares afectan la calidad del aire y la salud pública, aumentando gases de efecto invernadero.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Problem;
