import React, { useState } from 'react';
import './Inicio.css';

function Inicio() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="app">
      <div className="overlay">
        <h1>Bienvenido</h1>
        <p>
          En esta sección se describe la estructura SQL del sistema, incluyendo el diseño relacional de la base de datos y consultas utilizadas para el análisis de tráfico vehicular.
        </p>

        <div className="sql-image-container">
          <img
            src="https://i.ibb.co/LhYBL03S/r-ELACIONAL.jpg"
            alt="Modelo Relacional SQL"
            className="sql-image"
          />
        </div>

        <button className="cta-button" onClick={openModal}>
          Ver Detalle SQL
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>Modelo Relacional SQL</h2>
            <img
              src="https://i.ibb.co/0RMZXL6g/SQL.jpg"
              alt="Modelo SQL Ampliado"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}


export default Inicio;
