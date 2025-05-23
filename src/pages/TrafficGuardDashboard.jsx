import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Line, Bar } from 'react-chartjs-2';
import 'leaflet/dist/leaflet.css';

// Chart.js registration (Chart.js v4+)
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

// Función para determinar color según nivel de CO2 (ejemplo)
const getColorByCO2 = (co2) => {
  if (co2 > 75) return '#d32f2f'; // rojo fuerte
  if (co2 > 50) return '#fbc02d'; // amarillo
  return '#388e3c'; // verde
};

const TrafficGuardDashboard = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  // Datos para las métricas totales (ejemplo, suma o promedio)
  const totalTimeLost = zones.reduce((acc, z) => acc + z.timeLost, 0);
  const avgCO2 = Math.round(zones.reduce((acc, z) => acc + z.co2, 0) / zones.length);
  const avgCongestion = Math.round(zones.reduce((acc, z) => acc + z.congestion, 0) / zones.length);

  // Datos para gráficos de tendencia (hardcodeados)
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

  // Alertas (ejemplo)
  const alerts = zones
    .filter((z) => z.co2 > 75 || z.congestion > 80)
    .map((z) => ({
      zone: z.name,
      type: z.co2 > 75 ? 'CO2 Alto' : 'Congestión Alta',
      severity: 'Alta',
      date: '2025-05-23',
    }));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        minHeight: '100vh',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#f5f5f5',
      }}
    >
      <div style={{ maxWidth: 1200, width: '100%' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
          }}
        >
          <h1 style={{ color: '#1976d2' }}>TrafficGuard - Análisis de Tráfico Urbano</h1>
          <div>
            <select
              style={{
                padding: 8,
                marginRight: 10,
                borderRadius: 4,
                border: '1px solid #ddd',
              }}
            >
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cali">Cali</option>
            </select>
            <select
              style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }}
            >
              <option value="24h">Últimas 24h</option>
              <option value="semana">Esta semana</option>
              <option value="mes">Este mes</option>
              <option value="ano">Este año</option>
            </select>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
          {/* Mapa */}
          <section
            style={{
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              backgroundColor: 'white',
              padding: 15,
              height: 500,
            }}
          >
            <h2 style={{ color: '#1976d2' }}>Mapa de Zonas</h2>
            <MapContainer
              center={[4.711, -74.072]}
              zoom={12}
              style={{ height: '420px', borderRadius: 8 }}
            >
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
                  eventHandlers={{
                    click: () => {
                      setSelectedZone(zone.name);
                    },
                  }}
                >
                  <Popup>
                    <strong>{zone.name}</strong>
                    <br />
                    Tiempo perdido: {zone.timeLost} min
                    <br />
                    CO2: {zone.co2} ppm
                    <br />
                    Congestión: {zone.congestion}%
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </section>

          {/* Métricas */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 15,
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: 15,
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <h3>Tiempo perdido total</h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  margin: 10,
                }}
              >
                {totalTimeLost} min
              </p>
              <p style={{ color: '#f44336' }}>↑ 15% vs promedio</p>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                padding: 15,
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <h3>Emisiones CO2 promedio</h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  margin: 10,
                }}
              >
                {avgCO2} ppm
              </p>
              <p style={{ color: '#fbc02d' }}>Nivel moderado</p>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                padding: 15,
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <h3>Congestión promedio</h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  margin: 10,
                }}
              >
                {avgCongestion} %
              </p>
              <p style={{ color: '#388e3c' }}>Estado aceptable</p>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                padding: 15,
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <h3>Velocidad promedio</h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  margin: 10,
                }}
              >
                35 km/h
              </p>
              <p style={{ color: '#1976d2' }}>Flujo moderado</p>
            </div>
          </section>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 20,
            marginTop: 30,
          }}
        >
          {/* Gráfico tiempo perdido */}
          <section
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 15,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              height: 300,
            }}
          >
            <h2 style={{ color: '#1976d2' }}>Tendencia de Tiempo Perdido</h2>
            <Line data={timeLostTrend} options={{ maintainAspectRatio: false, responsive: true }} />
          </section>

          {/* Gráfico CO2 */}
          <section
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 15,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              height: 300,
            }}
          >
            <h2 style={{ color: '#1976d2' }}>Tendencia de Emisiones CO2</h2>
            <Bar data={co2Trend} options={{ maintainAspectRatio: false, responsive: true }} />
          </section>
        </div>

        {/* Alertas */}
        <section style={{ marginTop: 30 }}>
          <h2 style={{ color: '#1976d2' }}>Alertas</h2>
          {alerts.length === 0 && <p>No hay alertas recientes.</p>}
          {alerts.length > 0 && (
            <ul>
              {alerts.map((alert, idx) => (
                <li key={idx} style={{ marginBottom: 10 }}>
                  <strong>{alert.zone}</strong>: {alert.type} (Severidad: {alert.severity}) - {alert.date}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
  
};

export default TrafficGuardDashboard;
