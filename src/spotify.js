import React from 'react';
import SpotifyLogo from './images/spotify.png';
import Winter from './images/winter.png';
import Summer from './images/summer.png';
import OldSummer from './images/oldsummer.png';
import Goombay from './images/goombay.png';
import FootballSZN from './images/footballszn.png';
import CollegeSpring from './images/collegespring.png';

export default function Description() {
  const handleSpotifyClick = () => {
    // Redirect to the Spotify account
    window.open('https://open.spotify.com/user/blakegermani', '_blank'); // Replace with the desired Spotify account URL
  };

  return (
    <div
      style={{
        color: 'black',
        fontFamily: 'Orbitron',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textDecoration: 'underline' }}>my music</h1>
      <div
        onClick={handleSpotifyClick}
        style={{
          display: 'inline-block',
          transition: 'opacity 0.3s',
          cursor: 'pointer',
          marginBottom: '20px', // Added space here
        }}
      >
        <div>
          <img
            src={SpotifyLogo}
            alt="Spotify Logo"
            style={{ width: '200px', height: '200px', opacity: 1 }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <a href="https://open.spotify.com/playlist/3wZv5aBi0EhplDrdWDO3Lq?si=eb22f591b2784b72&pt=53c0a2c250cac2f9120aedc206c6fbf5" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={FootballSZN} alt="Football Season" style={{ width: '200px', height: '200px' }} />
        </a>
        <a href="https://open.spotify.com/playlist/3Nxupq7bGHulwGclc1zrvC?si=c3f59fc9966443f7" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={Goombay} alt="Goombay" style={{ width: '200px', height: '200px' }} />
        </a>
        <a href="https://open.spotify.com/playlist/2OOfr4wLZr4ksyN80U0HNQ?si=3404cf991664472a" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={Summer} alt="Summer" style={{ width: '200px', height: '200px' }} />
        </a>
        <a href="https://open.spotify.com/playlist/1al9u0leKfjp3kDw6ZEz7P?si=56ed5eb8d9544092" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={OldSummer} alt="Old Summer" style={{ width: '200px', height: '200px' }} />
        </a>
        <a href="https://open.spotify.com/playlist/34Ej1ZmpSRfPtbrUg06wga?si=e613dbc624924e5f" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={Winter} alt="Winter" style={{ width: '200px', height: '200px' }} />
        </a>
        <a href="https://open.spotify.com/playlist/5vMGIQOXant9xyhHRdQS7g?si=81c6af67117448c8" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={CollegeSpring} alt="College Spring" style={{ width: '200px', height: '200px' }} />
        </a>
      </div>
    </div>
  );
}
