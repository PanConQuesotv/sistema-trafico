import React from "react";
import "./Problem.css";

const Problem = () => {
  return (
    <div className="problem-container">
      <h1>Problema del tráfico urbano</h1>
      <div className="problem-content">
        <p>
          En las principales ciudades del mundo, el tráfico urbano se ha
          convertido en uno de los mayores desafíos para la movilidad diaria de
          millones de personas. Esta congestión constante no solo afecta el
          tiempo de traslado de los ciudadanos, sino que también tiene un
          impacto directo en la calidad de vida, el medio ambiente y la economía
          urbana.
        </p>

        <p>
          La falta de datos centralizados y en tiempo real sobre el flujo
          vehicular, la escasa cultura de movilidad sostenible, y la ausencia de
          herramientas efectivas para el análisis predictivo han agravado este
          problema. Los ciudadanos, además, se enfrentan a una constante
          desinformación: rutas colapsadas, accidentes no reportados a tiempo,
          obras no planificadas y una falta de coordinación entre autoridades
          y plataformas de movilidad.
        </p>

        <p>
          Esta situación genera importantes consecuencias:
          <ul>
            <li>
              Aumento de las emisiones de CO₂ debido a motores en marcha por
              tiempos prolongados en atascos.
            </li>
            <li>
              Mayor contaminación acústica, especialmente en zonas de alto
              tráfico y densidad poblacional.
            </li>
            <li>
              Pérdida de productividad y tiempo valioso para los ciudadanos,
              afectando su bienestar físico y mental.
            </li>
            <li>
              Incremento de accidentes de tránsito, especialmente en puntos
              críticos no monitoreados.
            </li>
          </ul>
        </p>

        <p>
          Resolver este problema requiere un enfoque tecnológico integral que
          permita recolectar datos de forma automática, analizarlos en tiempo
          real y presentar visualizaciones claras para la toma de decisiones
          efectivas. Nuestro sistema apunta precisamente a eso: transformar datos
          dispersos en información útil para ciudadanos, gobiernos y empresas.
        </p>
      </div>
    </div>
  );
};

export default Problem;
