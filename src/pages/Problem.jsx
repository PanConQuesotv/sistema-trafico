import React, { useState } from 'react';
import './ProblemBoxes.css';

function Problem() {
  const [activeBox, setActiveBox] = useState(null);

  const handleOpen = (box) => {
    setActiveBox(box);
  };

  const handleClose = () => {
    setActiveBox(null);
  };

  return (
    <div className="app">
      <div className="overlay" style={{ maxWidth: '700px' }}>
        <h1>Definición del Problema</h1>
        <p>
          En las ciudades modernas, la congestión vehicular representa un desafío significativo para la movilidad y la sostenibilidad.
        </p>

        <div className="boxes-container">
          <div className="box">
            <h2>Problemática</h2>
            <p>Congestión vehicular, pérdida de tiempo, aumento de estrés.</p>
            <button className="cta-button small" onClick={() => handleOpen('problem')}>
              Ver más
            </button>
          </div>

          <div className="box">
            <h2>Impacto Ambiental</h2>
            <p>Contaminación del aire y afectaciones a la salud pública.</p>
            <button className="cta-button small" onClick={() => handleOpen('impact')}>
              Ver más
            </button>
          </div>
        </div>
      </div>

      {activeBox && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>×</button>
            {activeBox === 'problem' && (
              <>
                <h2>Detalles de la Problemática</h2>
                <p>
                  El crecimiento urbano ha incrementado la densidad de vehículos, causando congestión en horas pico. Esto afecta directamente la calidad de vida de los ciudadanos, incrementa los tiempos de traslado y deteriora la salud mental por el estrés diario del tráfico.
                </p>
              </>
            )}
            {activeBox === 'impact' && (
              <>
                <h2>Impacto Ambiental</h2>
                <p>
                  La contaminación vehicular es una de las principales fuentes de emisiones de gases nocivos. Esta situación contribuye al cambio climático, deteriora la calidad del aire y genera enfermedades respiratorias, especialmente en zonas con alta densidad poblacional.
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
