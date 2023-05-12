import React from 'react';
import FidelityLogo from './images/fidelity.jpg';
import FidelityLogo1 from './images/fidelity1.jpg';

export default function Work() {
  return (
    <div style={{ color: 'black', fontFamily: 'Orbitron', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>
        Experience
      </h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <a href="https://www.fidelitydigitalassets.com/" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={FidelityLogo} alt="Football Season" style={{ width: '100px', height: '100px' }} />
        </a>
        <div style={{ marginLeft: '20px' }}>
          <p>-Fidelity Digital Assets Intern</p>
          <p>-Will be working on their product delivery team over the summer!</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={FidelityLogo1} alt="Football Season" style={{ width: '100px', height: '100px' }} />
        </a>
        <div style={{ marginLeft: '20px' }}>
          <p>-Fidelity Workplace Investment Relationship Intern</p>
          <p>-Worked here last summer!</p>
        </div>
      </div>
    </div>
  );
}