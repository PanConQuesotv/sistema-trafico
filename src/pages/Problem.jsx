import React from 'react';

function Problem() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Definición del Problema</h1>
        <p>
          En las ciudades modernas, la congestión vehicular representa un desafío significativo para la movilidad,
          especialmente en zonas sensibles como áreas escolares o intersecciones clave.
        </p>
        <p>
          Este sistema tiene como objetivo analizar datos en tiempo real para identificar cuellos de botella
          y proponer soluciones dinámicas que mejoren el flujo vehicular y la seguridad.
        </p>
        <button className="cta-button" onClick={() => alert('Aquí se podría mostrar un caso específico.')}>
          Ver Ejemplo
        </button>
      </div>
    </div>
  );
}

export default Problem;
