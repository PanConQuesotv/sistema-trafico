import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Line, Bar } from 'react-chartjs-2';
import 'leaflet/dist/leaflet.css';

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
  if (co2 > 75) return '#dc2626';
  if (co2 > 50) return '#f59e0b';
  return '#16a34a';
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
        label: 'Tiempo perdido (min)',
        data: [20, 40, 60, 50, 30, 25],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const co2Trend = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [
      {
        label: 'CO2 (ppm)',
        data: [40, 55, 80, 70, 50, 45],
        backgroundColor: '#facc15',
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
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TrafficGuard - Análisis de Tráfico</h1>
          <div className="space-x-2">
            <select className="border rounded px-2 py-1">
              <option>Bogotá</option>
              <option>Medellín</option>
            </select>
            <select className="border rounded px-2 py-1">
              <option>Últimas 24h</option>
              <option>Esta semana</option>
            </select>
          </div>
        </div>

        {/* Mapa y métricas */}
        <div className="grid grid-cols-3 gap-4">
          {/* Mapa */}
          <div className="col-span-2 bg-gray-100 rounded-xl p-2">
            <MapContainer center={[4.711, -74.072]} zoom={12} style={{ height: '400px', borderRadius: '0.75rem' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {zones.map((zone) => (
                <CircleMarker
                  key={zone.name}
                  center={zone.coords}
                  radius={15}
                  pathOptions={{ color: getColorByCO2(zone.co2), fillOpacity: 0.7 }}
                  eventHandlers={{
                    click: () => setSelectedZone(zone.name),
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
          </div>

          {/* Métricas */}
          <div className="flex flex-col space-y-3">
            <div className="bg-white border rounded-xl shadow p-3 text-center">
              <h3 className="text-gray-600">Tiempo perdido total</h3>
              <p className="text-2xl font-bold">{totalTimeLost} min</p>
            </div>
            <div className="bg-white border rounded-xl shadow p-3 text-center">
              <h3 className="text-gray-600">CO2 promedio</h3>
              <p className="text-2xl font-bold">{avgCO2} ppm</p>
            </div>
            <div className="bg-white border rounded-xl shadow p-3 text-center">
              <h3 className="text-gray-600">Congestión promedio</h3>
              <p className="text-2xl font-bold">{avgCongestion}%</p>
            </div>
          </div>
        </div>

        {/* Gráficos y alertas */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white border rounded-xl shadow p-4">
            <h3 className="font-semibold mb-2">Tendencia Tiempo Perdido</h3>
            <Line data={timeLostTrend} />
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl shadow p-4 max-h-[300px] overflow-y-auto">
            <h3 className="font-semibold text-red-600 mb-2">Alertas</h3>
            {alerts.length === 0 ? (
              <p>No hay alertas.</p>
            ) : (
              alerts.map((a, i) => (
                <div key={i} className="mb-3 border-b pb-2">
                  <strong>{a.zone}</strong> - {a.type}
                  <br />
                  <span className="text-sm text-gray-500">{a.date}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Gráfico CO2 */}
        <div className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">CO2 Emisiones por Hora</h3>
          <Bar data={co2Trend} />
        </div>
      </div>
    </div>
  );
};

export default TrafficGuardDashboard;
