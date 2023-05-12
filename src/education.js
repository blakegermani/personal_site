import React from 'react';
import BCLogo from './images/bostoncollege.png';
import BHSLogo from './images/bhs.png';

export default function Description() {
  return (
    <div style={{ color: 'black', fontFamily: 'Orbitron', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>
        Education
      </h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <a href="https://www.bc.edu/" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={BCLogo} alt="Football Season" style={{ width: '100px', height: '100px' }} />
        </a>
        <div style={{ marginLeft: '20px' }}>
          <p>-Boston College</p>
          <p>-Major in Economics, Minor in Computer Science & Finance | VP of BC Blockchain</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <a href="https://www.barnstable.k12.ma.us/bhs" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={BHSLogo} alt="Football Season" style={{ width: '100px', height: '100px' }} />
        </a>
        <div>
          <p style={{ marginLeft: '20px'}}>-Barnstable High School </p>
          <p style={{ marginLeft: '20px'}}>-Varsity Golf (Captain), Lacrosse| President of DECA(Nationals Qualifier) | Class Treasurer | Spanish Honors Society Treasurer | Math National Honors Society | National Honors Society</p>
        </div>
      </div>
    </div>
  );
}
