function Inicio() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Bienvenido</h1>
        <p>Este es el inicio del sistema de tráfico.</p>
        <button
          className="cta-button"
          onClick={() => alert('Próximamente.')}
        ></button>
        
      </div>
    </div>
  );
}



export default Inicio;
