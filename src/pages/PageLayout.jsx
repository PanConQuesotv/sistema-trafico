// src/components/PageLayout.jsx
import Navbar from './Navbar';
import '../App.css';

function PageLayout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <div className="page-content">
        <div className="overlay">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
