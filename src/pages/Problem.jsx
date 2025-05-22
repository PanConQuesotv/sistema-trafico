import React, { useState } from "react";
import "./Problem.css";

const Problem = () => {
  const [showProblem, setShowProblem] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  return (
    <div className="problem-section">
      <h1 className="problem-title">Sistema de Análisis de Tráfico Urbano</h1>
      <p className="problem-subtitle">
        Exploramos cómo los datos ayudan a resolver problemas reales en la ciudad.
      </p>

      <div className="problem-cards">
        <div className="problem-card">
          <h2>Problemática</h2>
          <button onClick={() => setShowProblem(true)}>Ver más</button>
        </div>

        <div className="problem-card">
          <h2>Impacto Ambiental</h2>
          <button onClick={() => setShowImpact(true)}>Ver más</button>
        </div>
      </div>

      {showProblem && (
        <div className="problem-overlay" onClick={() => setShowProblem(false)}>
          <div className="problem-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="problem-close-button" onClick={() => setShowProblem(false)}>
              ×
            </button>
            <h2>Problema Actual</h2>
            <p>
              En las ciudades modernas, el tráfico urbano representa un desafío persistente. La congestión vehicular genera pérdidas de tiempo significativas para conductores y pasajeros, aumenta el consumo de combustible y, por ende, eleva las emisiones de gases de efecto invernadero. Además, la falta de información unificada y actualizada dificulta la toma de decisiones efectivas tanto a nivel ciudadano como gubernamental. Nuestra ciudad no escapa de esta realidad: los datos de movilidad están fragmentados, los reportes son escasos y el monitoreo del flujo vehicular es insuficiente para una planificación inteligente.
            </p>
          </div>
        </div>
      )}

      {showImpact && (
        <div className="problem-overlay" onClick={() => setShowImpact(false)}>
          <div className="problem-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="problem-close-button" onClick={() => setShowImpact(false)}>
              ×
            </button>
            <h2>Impacto Ambiental</h2>
            <p>
              La congestión vehicular incrementa las emisiones de CO₂ y otros contaminantes como NO₂ y material particulado, afectando la calidad del aire y la salud pública. El tráfico prolongado genera además contaminación acústica y deterioro urbano. A nivel global, se estima que el transporte es responsable de más del 20% de las emisiones de gases de efecto invernadero. Reducir estos impactos mediante sistemas de monitoreo y análisis es crucial para avanzar hacia ciudades más sostenibles.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem;
