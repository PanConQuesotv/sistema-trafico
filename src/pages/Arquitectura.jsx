import React, { useState } from 'react';
import './Arquitectura.css';

function Arquitectura() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="app">
      <div className="overlay">
        <h1>Arquitectura del Sistema</h1>
        <p>
          Este sistema está diseñado para recolectar, procesar y visualizar datos de tráfico urbano
          en tiempo real. A continuación, se presenta un diagrama que describe cómo se comunican
          los distintos componentes del sistema.
        </p>
        <button className="cta-button" onClick={openModal}>
          Ver Diagrama ETL
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img
              src="https://i.ibb.co/xKg783fc/arbol.jpg"
              alt="Diagrama ETL"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Arquitectura;
