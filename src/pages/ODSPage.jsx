import React, { useState } from 'react';
import './ODSPage.css';

const odsData = {
  ods9: {
    title: 'ODS 9: Industria, innovación e infraestructura',
    text: 'Nuestro sistema fomenta el uso de tecnologías innovadoras para optimizar la movilidad urbana, alineándose con el desarrollo de infraestructuras sostenibles e inteligentes.',
    img: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-09.jpg'
  },
  ods11: {
    title: 'ODS 11: Ciudades y comunidades sostenibles',
    text: 'Contribuye a una mejor gestión del tránsito urbano, reduciendo tiempos de traslado y promoviendo ciudades más habitables y organizadas.',
    img: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-11.jpg'
  },
  ods13: {
    title: 'ODS 13: Acción por el clima',
    text: 'La disminución de la congestión reduce las emisiones de gases de efecto invernadero, contribuyendo a la mitigación del cambio climático.',
    img: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-13.jpg'
  }
};

function ODSPage() {
  const [activeOds, setActiveOds] = useState(null);

  const handleOpen = (key) => setActiveOds(key);
  const handleClose = () => setActiveOds(null);

  return (
    <div className="app">
      <div className="overlay">
        <h1>Relación con los Objetivos de Desarrollo Sostenible (ODS)</h1>
        <p>Conoce cómo nuestro sistema contribuye al cumplimiento de los ODS definidos por la ONU.</p>

        <div className="ods-icons-container">
          {Object.entries(odsData).map(([key, ods]) => (
            <div 
              key={key} 
              className="ods-box" 
              onClick={() => handleOpen(key)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if(e.key === 'Enter') handleOpen(key)}}
            >
              <img src={ods.img} alt={ods.title} className="ods-icon" />
              <h3>{ods.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {activeOds && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>×</button>
            <img src={odsData[activeOds].img} alt={odsData[activeOds].title} className="modal-img" />
            <h2>{odsData[activeOds].title}</h2>
            <p>{odsData[activeOds].text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ODSPage;
