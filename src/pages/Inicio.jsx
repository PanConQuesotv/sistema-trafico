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
          Como parte del desarrollo del sistema de gestión de tráfico vehicular, se integraron datos provenientes de un archivo Excel utilizando paquetes SSIS (SQL Server Integration Services). En primer lugar, se diseñó un flujo de datos que permitió extraer la información del archivo, aplicar conversiones de tipos de datos, y generar columnas derivadas para enriquecer los datos originales.

Posteriormente, se construyó un modelo relacional completamente normalizado. Este modelo incluyó la creación de tablas como Peaje, Vehículo, Propietario, Departamento, Tiempo y Sensor, todas relacionadas mediante claves primarias y foráneas para garantizar la integridad referencial.

Paralelamente, se implementó un modelo multidimensional enfocado en el análisis de tráfico, el cual consistió en una tabla de hechos que almacena eventos de tráfico y varias tablas de dimensiones (Dim_Peaje, Dim_Tiempo, Dim_Vehículo, entre otras), permitiendo así la posterior explotación de los datos mediante herramientas de inteligencia de negocios.

Finalmente, se automatizó el proceso de carga mediante la creación de Jobs en SQL Server Agent, que permiten ejecutar periódicamente los paquetes SSIS y mantener la base de datos actualizada con nuevos datos sin intervención manual.
        </p>

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
