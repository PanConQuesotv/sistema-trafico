import React from "react";
import "./Problem.css";

const Problem = () => {
  return (
    <div className="problem-container">
      <div className="problem-overlay">
        <h2>Sistema de Análisis de Tráfico Urbano</h2>
        <p className="problem-subtitle">
          Exploramos cómo los datos ayudan a resolver problemas reales en la ciudad.
        </p>

        <div className="problem-cards">
          <div className="problem-card">
            <h3>Problemática</h3>
            <p>
              El crecimiento urbano ha generado un aumento significativo en el tráfico vehicular. 
              Esto se traduce en tiempos de desplazamiento más largos, mayor contaminación ambiental 
              y un incremento en los accidentes de tránsito.
            </p>
          </div>
          <div className="problem-card">
            <h3>¿Cómo lo resolvemos?</h3>
            <p>
              Implementando un sistema inteligente que recopile, analice y visualice datos de tráfico en tiempo real. 
              Esto permitirá a las autoridades tomar decisiones informadas para optimizar el flujo vehicular y reducir 
              el impacto ambiental.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
