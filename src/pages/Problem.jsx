import React, { useState } from 'react';
import './Problem.css';

export default function Problem() {
const [activeOverlay, setActiveOverlay] = useState(null);

const openOverlay = (type) => setActiveOverlay(type);
const closeOverlay = () => setActiveOverlay(null);

return (
<div className="problem-page">
<h1 className="problem-title">Análisis del Problema</h1>
<div className="cards-container">
<div className="info-card" onClick={() => openOverlay('problematica')}>
<h2>Problemática</h2>
<button>Ver más</button>
</div>
<div className="info-card" onClick={() => openOverlay('impacto')}>
<h2>Impacto Ambiental</h2>
<button>Ver más</button>
</div>
</div>
  {activeOverlay === 'problematica' && (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={closeOverlay}>✕</button>
        <h2>Problemática</h2>
        <p>
          La congestión vehicular, la falta de acceso a datos unificados y la desinformación impactan negativamente en la movilidad urbana.
          Los ciudadanos no tienen herramientas de consulta en tiempo real que les permitan tomar decisiones eficientes sobre sus rutas.
        </p>
        <p>
          Esto contribuye a:
          <ul>
            <li>Mayor tiempo perdido en trayectos diarios.</li>
            <li>Incremento en las emisiones de CO₂ por ralentización del tráfico.</li>
            <li>Elevación de los niveles de ruido en zonas críticas.</li>
          </ul>
        </p>
      </div>
    </div>
  )}

  {activeOverlay === 'impacto' && (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={closeOverlay}>✕</button>
        <h2>Impacto Ambiental</h2>
        <p>
          La ineficiencia en el tráfico no solo genera frustración social, sino que agrava la contaminación ambiental.
          Nuestro sistema busca mitigar esto al facilitar la visualización de datos en tiempo real.
        </p>
        <ul>
          <li>Reduce emisiones de gases contaminantes.</li>
          <li>Disminuye el consumo innecesario de combustible.</li>
          <li>Contribuye al cumplimiento de los ODS (9, 11, 13).</li>
        </ul>
      </div>
    </div>
  )}
</div>
);
}