import React from 'react';
import './PowerBIReport.css';

const PowerBIReport = () => {
return (
<div className="powerbi-container">
<h1 className="powerbi-title">Reporte Power BI</h1>
<div className="powerbi-iframe-wrapper">
<iframe title="TraficGuard" width="1000" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZDNhYjc3Y2ItYTRiYi00OGRjLWEwMDItOGYxMzQzOTg3OTllIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9" frameBorder="0" allowFullScreen={true} ></iframe>
</div>
</div>
);
};

export default PowerBIReport;
