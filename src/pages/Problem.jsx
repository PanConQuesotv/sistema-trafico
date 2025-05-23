import React, { useState } from 'react';
import './Problem.css';

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
      {/* Quitar la clase shift-left, solo overlay */}
      <div className="overlay">
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

          <div className="box">
            <h2>Afectación Ambiental</h2>
            <p>Emisión de CO₂, aumento de ruido y pérdida de tiempo productivo.</p>
            <button className="cta-button small" onClick={() => handleOpen('effects')}>
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
                  La falta de información en tiempo real, los datos dispersos sobre el tráfico y la carencia de herramientas para visualización eficiente del flujo vehicular generan congestión constante.
                </p>
              </>
            )}
            {activeBox === 'impact' && (
              <>
                <h2>Impacto Ambiental</h2>
                <p>
                  La acumulación de vehículos en zonas urbanas incrementa las emisiones de CO₂, los niveles de ruido y afecta negativamente la calidad del aire.
                </p>
              </>
            )}
            {activeBox === 'effects' && (
              <>
                <h2>Consecuencias Directas</h2>
                <p>
                  La congestión prolongada provoca emisiones contaminantes (CO₂), contaminación acústica y pérdida de tiempo que podría emplearse en actividades productivas.
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
