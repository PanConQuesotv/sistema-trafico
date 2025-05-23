import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Line, Bar } from 'react-chartjs-2';
import 'leaflet/dist/leaflet.css';
import './Dashboard.css'; // Importa los estilos

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const zones = [
  { name: "Centro", coords: [4.711, -74.072], timeLost: 45, co2: 80, congestion: 70 },
  { name: "Norte", coords: [4.735, -74.05], timeLost: 30, co2: 50, congestion: 40 },
  { name: "Sur", coords: [4.68, -74.1], timeLost: 60, co2: 90, congestion: 85 },
  { name: "Este", coords: [4.72, -74.0], timeLost: 20, co2: 30, congestion: 25 },
  { name: "Oeste", coords: [4.70, -74.12], timeLost: 55, co2: 75, congestion: 65 },
];

const getColorByCO2 = (co2) => {
  if (co2 > 75) return '#d32f2f';
  if (co2 > 50) return '#fbc02d';
  return '#388e3c';
};

const TrafficGuardDashboard = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const totalTimeLost = zones.reduce((acc, z) => acc + z.timeLost, 0);
  const avgCO2 = Math.round(zones.reduce((acc, z) => acc + z.co2, 0) / zones.length);
  const avgCongestion = Math.round(zones.reduce((acc, z) => acc + z.congestion, 0) / zones.length);

  const timeLostTrend = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [
      {
        label: 'Tiempo perdido (minutos)',
        data: [20, 40, 60, 50, 30, 25],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const co2Trend = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [
      {
        label: 'Emisiones CO2 (ppm)',
        data: [40, 55, 80, 70, 50, 45],
        backgroundColor: '#fbc02d',
      },
    ],
  };

  const alerts = zones
    .filter((z) => z.co2 > 75 || z.congestion > 80)
    .map((z) => ({
      zone: z.name,
      type: z.co2 > 75 ? 'CO2 Alto' : 'Congestión Alta',
      severity: 'Alta',
      date: '2025-05-23',
    }));

  return (
    <div className="app">
      <div className="overlay">
        <h1>TrafficGuard - Análisis de Tráfico Urbano</h1>

        <div className="dashboard-header">
          <select>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="cali">Cali</option>
          </select>
          <select>
            <option value="24h">Últimas 24h</option>
            <option value="semana">Esta semana</option>
            <option value="mes">Este mes</option>
            <option value="ano">Este año</option>
          </select>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-card map">
            <h2>Mapa de Zonas</h2>
            <MapContainer center={[4.711, -74.072]} zoom={12} style={{ height: '420px', borderRadius: 8 }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {zones.map((zone) => (
                <CircleMarker
                  key={zone.name}
                  center={zone.coords}
                  radius={15}
                  pathOptions={{ color: getColorByCO2(zone.co2), fillOpacity: 0.7 }}
                  eventHandlers={{ click: () => setSelectedZone(zone.name) }}
                >
                  <Popup>
                    <strong>{zone.name}</strong><br />
                    Tiempo perdido: {zone.timeLost} min<br />
                    CO2: {zone.co2} ppm<br />
                    Congestión: {zone.congestion}%
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </section>

          <section className="dashboard-card metrics">
            <div>
              <h3>Tiempo perdido total</h3>
              <p>{totalTimeLost} min</p>
            </div>
            <div>
              <h3>CO2 promedio</h3>
              <p>{avgCO2} ppm</p>
            </div>
            <div>
              <h3>Congestión promedio</h3>
              <p>{avgCongestion} %</p>
            </div>
            <div>
              <h3>Velocidad promedio</h3>
              <p>35 km/h</p>
            </div>
          </section>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-card">
            <h3>Tendencia Tiempo Perdido</h3>
            <Line data={timeLostTrend} />
          </section>

          <section className="dashboard-card alerts">
            <h3>Alertas</h3>
            {alerts.length === 0 ? (
              <p>No hay alertas críticas.</p>
            ) : (
              alerts.map((alert, idx) => (
                <div key={idx}>
                  <strong>{alert.zone}</strong> - {alert.type} - {alert.date}
                </div>
              ))
            )}
          </section>
        </div>

        <section className="dashboard-card">
          <h3>Emisiones CO2 por Hora</h3>
          <Bar data={co2Trend} />
        </section>
      </div>
    </div>
  );
};

export default TrafficGuardDashboard;
