import React, { useState } from 'react';
import './Sistema.css';

const pasos = [
  {
    titulo: '1. Descarga de Datasets',
    texto: 'Se recopilan datos abiertos sobre tráfico vehicular y peajes desde plataformas oficiales como datos.gov.co.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  },
  {
    titulo: '2. Modelo Relacional',
    texto: 'Los datos se organizan en un modelo relacional que permite estructurar la información y normalizarla.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  },
  {
    titulo: '3. Modelo Multidimensional',
    texto: 'Se transforma la base relacional en un modelo estrella para análisis más eficientes en herramientas BI.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  },
  {
    titulo: '4. Gráficas en Power BI',
    texto: 'Se visualizan indicadores claves como volumen vehicular, congestión, picos horarios, etc.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  },
  {
    titulo: '5. Proceso ETL',
    texto: 'Se diseña un flujo de extracción, transformación y carga para automatizar el procesamiento de datos.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  },
  {
    titulo: '6. Maqueta e Interfaz',
    texto: 'Se diseña una interfaz gráfica e intuitiva que permite al usuario explorar visualmente el sistema.',
    imagen: 'https://www.stellar-blade.com/resources/front/images/post_ms7/22.jpg'
  }
];

function Sistema() {
  const [activeCard, setActiveCard] = useState(null);

  const openCard = (index) => setActiveCard(index);
  const closeCard = () => setActiveCard(null);

  return (
    <div className="app">
      {/* Contenedor overlay negro con padding, como en Problema */}
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
            <img src={pasos[activeCard].imagen} alt="" className="modal-img" />
            <h3>{pasos[activeCard].titulo}</h3>
            <p>{pasos[activeCard].texto}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sistema;
