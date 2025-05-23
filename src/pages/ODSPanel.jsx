import React, { useState } from 'react';
import './ODSPanel.css';

const odsData = {
  ods9: {
    title: 'ODS 9: Industria, innovación e infraestructura',
    text: 'Nuestro sistema fomenta el uso de tecnologías innovadoras para optimizar la movilidad urbana, alineándose con el desarrollo de infraestructuras sostenibles e inteligentes.',
    img: 'https://sdgs.un.org/sites/default/files/2023-09/goal-9.png'
  },
  ods11: {
    title: 'ODS 11: Ciudades y comunidades sostenibles',
    text: 'Contribuye a una mejor gestión del tránsito urbano, reduciendo tiempos de traslado y promoviendo ciudades más habitables y organizadas.',
    img: 'https://sdgs.un.org/sites/default/files/2023-09/goal-11.png'
  },
  ods13: {
    title: 'ODS 13: Acción por el clima',
    text: 'La disminución de la congestión reduce las emisiones de gases de efecto invernadero, contribuyendo a la mitigación del cambio climático.',
    img: 'https://sdgs.un.org/sites/default/files/2023-09/goal-13.png'
  }
};

function ODSPanel() {
  const [activeOds, setActiveOds] = useState(null);

  return (
    <div className="ods-section">
      <h2>Relación con los Objetivos de Desarrollo Sostenible (ODS)</h2>
      <p>Conoce cómo nuestro sistema contribuye al cumplimiento de los ODS definidos por la ONU.</p>

      <div className="ods-icons">
        {Object.entries(odsData).map(([key, ods]) => (
          <img
            key={key}
            src={ods.img}
            alt={ods.title}
            className="ods-icon"
            onClick={() => setActiveOds(key)}
          />
        ))}
      </div>

      <div className={`ods-panel ${activeOds ? 'open' : ''}`}>
        {activeOds && (
          <>
            <button className="close-btn" onClick={() => setActiveOds(null)}>×</button>
            <h3>{odsData[activeOds].title}</h3>
            <p>{odsData[activeOds].text}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ODSPanel;
