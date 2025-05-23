import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-app">
      <div className="dashboard-overlay">
        <h1>Panel de Control</h1>
        <p>Visualiza las métricas y datos del sistema de tráfico en tiempo real.</p>

        <div className="dashboard-content">
          {/* Aquí puedes agregar gráficas, métricas, etc */}
          <div className="dashboard-card">
            <h3>Velocidad Promedio</h3>
            <p>45 km/h</p>
          </div>

          <div className="dashboard-card">
            <h3>Intersecciones activas</h3>
            <p>12</p>
          </div>

          <div className="dashboard-card">
            <h3>Congestión actual</h3>
            <p>Baja</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
