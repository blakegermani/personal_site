import React from 'react';
import LiquidexLogo from './images/liquidex.png';
import './iconStyle.css';

const LiquidexLink = () => {
  return (
    <a href="https://liquidex.club" target="_blank" rel="noopener noreferrer">
      <img className="icon" src={LiquidexLogo} alt="Liquidex Logo" style={{ width: '180px', height: '180px' }} />
    </a>
  );
};

export default LiquidexLink;
