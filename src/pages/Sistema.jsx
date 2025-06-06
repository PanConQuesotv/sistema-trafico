import React, { useState } from 'react';
import './Sistema.css';

const pasos = [
  {
    titulo: '1. Descarga de Datasets',
    texto: 'Se recopilan datos abiertos sobre tráfico vehicular y peajes desde plataformas oficiales como datos.gov.co.',
    imagen: 'https://i.ibb.co/bMpQW8Zz/daset.jpg'
  },
  {
    titulo: '2. Modelo Relacional',
    texto: 'Los datos se organizan en un modelo relacional que permite estructurar la información y normalizarla.',
    imagen: 'https://i.ibb.co/LhYBL03S/r-ELACIONAL.jpg'
  },
  {
    titulo: '3. Modelo Multidimensional',
    texto: 'Se transforma la base relacional en un modelo estrella para análisis más eficientes en herramientas BI.',
    imagen: 'https://i.ibb.co/C4yC2mY/Multi.jpg'
  },
  {
    titulo: '4. Gráficas en Power BI',
    texto: 'Se visualizan indicadores claves como volumen vehicular, congestión, picos horarios, etc.',
    imagen: 'https://i.ibb.co/S4RxTjNd/bi.jpg'
  },
  {
    titulo: '5. Proceso ETL',
    texto: 'Se diseña un flujo de extracción, transformación y carga para automatizar el procesamiento de datos.',
    imagen: 'https://i.ibb.co/6c38c8zK/Job.jpg'
  },
  {
    titulo: '6. Maqueta e Interfaz',
    texto: 'Se diseña una interfaz gráfica e intuitiva que permite al usuario explorar visualmente el sistema.',
    imagen: 'https://i.ibb.co/27Cpmv2N/Maquta.jpg'
  }
];

function Sistema() {
  const [activeCard, setActiveCard] = useState(null);

  const openCard = (index) => setActiveCard(index);
  const closeCard = () => setActiveCard(null);

  return (
    <div className="app">
      <div className="overlay">
        <h2>Arquitectura del Sistema</h2>
        <p>Conoce las etapas clave en el desarrollo del sistema de análisis de tráfico urbano basado en datos abiertos.</p>

        <div className="card-grid">
          {pasos.map((paso, index) => (
            <div
              className="card"
              key={index}
              style={{ backgroundImage: `url(${paso.imagen})` }}
              onClick={() => openCard(index)}
            >
              <div className="card-fondo"></div>
              <div className="card-overlay">
                <h3>{paso.titulo}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCard !== null && (
        <div className="modal-overlay" onClick={closeCard}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCard}>×</button>
            <h3>{pasos[activeCard].titulo}</h3>
            <p>{pasos[activeCard].texto}</p>
            <img src={pasos[activeCard].imagen} alt="" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sistema;
