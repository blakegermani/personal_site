import React from 'react';
import Header from './header.js';
import Links from './links.js';
import Description from './description.js';
import Education from './education.js';
import Work from './work.js';
import Spotify from './spotify.js';
import './App.css';
import { Container } from '@mui/material';
import Images from './Images';
import RecentTweets from './twitter.js';

function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        background: 'linear-gradient(to bottom right,  #E3E9EB, #0F4C5C)',
        color: 'white',
        height: 'auto',
        paddingBottom: '20px'
      }}
    >
      <Header />
      <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
      <Images />
      <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
      <Container sx={{ height: '100%', width: '75%', backgroundColor: 'transparent' }}>
        <div>
          <Description />
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
        <div>
          <Links />
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
        <div>
          <RecentTweets />
          <Spotify />
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
        <div>
          <Education />
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid black' }} />
        <div>
          <Work />
        </div>
      </Container>
    </div>
  );
}

export default App;
