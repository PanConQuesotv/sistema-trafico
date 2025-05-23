import React from 'react';
import TrafficGuardDashboard from './TrafficGuardDashboard';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // centro horizontal
        alignItems: 'center',     // centro vertical
        minHeight: '100vh',       // ocupa toda la altura de la ventana
        padding: 20,
        backgroundColor: '#f5f7fa', // fondo suave opcional
      }}
    >
      <TrafficGuardDashboard />
    </div>
  );
};

