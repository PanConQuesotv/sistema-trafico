import React from 'react';
import './PowerBIReport.css';

const PowerBIReport = () => {
  return (
    <div className="powerbi-container">
      <h1>Dashboard de Análisis - Power BI</h1>
      <div className="powerbi-frame-wrapper">
        <iframe
          title="Reporte Power BI"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=TU_LINK_PUBLICADO"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIReport;
