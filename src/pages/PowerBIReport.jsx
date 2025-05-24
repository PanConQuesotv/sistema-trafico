import './PowerBIReport.css';

function PowerBIReport() {
  return (
    <div className="overlay">
      <h1>Panel de Power BI</h1>
      <iframe
        title="TraficGuard"
        width="100%"
        height="700"
        src="https://app.powerbi.com/view?r=eyJrIjoiZDNhYjc3Y2ItYTRiYi00OGRjLWEwMDItOGYxMzQzOTg3OTllIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '12px' }}
      ></iframe>
    </div>
  );
}

export default PowerBIReport;
