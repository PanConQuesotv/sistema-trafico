import React from 'react';
import '../App.css';

function Simulacion() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Simulación y generación de datos</h1>
        <p>
          Aquí se ejecuta un job simulado que genera datos de tráfico en tiempo real.
        </p>
        <div className="image-gallery">
          <img src="https://i.ibb.co/sdrKX1Yj/0101010101.jpg" alt="Simulación paso 1" />
          <img src="https://i.ibb.co/Kc7FP88j/020202020202002.jpg" alt="Simulación paso 2" />
          <img src="https://i.ibb.co/nsKjj3sc/0303030303030.jpg" alt="Simulación paso 3" />
        </div>
      </div>
    </div>
  );
}

export default Simulacion;
