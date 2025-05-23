import React, { useState } from 'react';
import './Problem.css'; // Este debe ir además de app.css

function Problem() {
  const [activeBox, setActiveBox] = useState(null);

  const handleCardClick = (id) => {
    setActiveBox(id === activeBox ? null : id);
  };

  const overlays = {
    impacto: (
      <>
        <h2>Impactos Ambientales</h2>
        <p>
          La congestión vehicular y la desinformación contribuyen a:
        </p>
        <ul>
          <li>⚠️ Aumento de CO₂ por vehículos detenidos.</li>
          <li>🔊 Mayor contaminación sonora por bocinas y motores.</li>
          <li>⏳ Pérdida de tiempo valioso en trayectos innecesarios.</li>
        </ul>
        <p>
          Estos efectos no solo impactan al medio ambiente, sino también la salud y productividad de las personas.
        </p>
      </>
    ),
    // Puedes añadir más overlays según vayas desarrollando los siguientes puntos
  };

  return (
    <div className="app">
      <div className="problem-container">
        <div className="cards-column">
          <div className="card-box" onClick={() => handleCardClick('impacto')}>
            <h3>2. Impactos Ambientales</h3>
          </div>
          {/* Aquí agregarás más card-box para ODS, Arquitectura, etc. */}
        </div>

        {activeBox && (
          <div className="problem-overlay">
            {overlays[activeBox]}
          </div>
        )}
      </div>
    </div>
  );
}

export default Problem;
