import { useEffect } from 'react';
import React from 'react';
import { Button } from '@mui/material';
import TwitterLink from './TwitterLink';
import LinkedInLink from './LinkedInLink';
import LiquidexLink from './LiquidexLink';
import { motion, useAnimation } from 'framer-motion';
import { useScrollPosition } from './useScrollPosition';

export default function Links() {
  const buttonStyle = {
    margin: '10px',
    borderRadius: '10px',
    padding: '10px 20px',
    fontWeight: 'bold',
    boxShadow: 'none',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
    },
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const scrollPosition = useScrollPosition();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: scrollPosition * .03, // Adjust sensitivity here
      y: scrollPosition * .3, // Adjust sensitivity here
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [controls, scrollPosition]);

  const email = 'germanib@bc.edu';

  return (
    <div style={{ color: 'black', fontFamily: 'Orbitron', textAlign: 'left', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>
        Check Me Out
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} transition={{ duration: 0.5 }} custom={0}>
          <div style={buttonStyle}>
            <LinkedInLink />
            <span>LinkedIn</span>
          </div>
        </motion.div>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={controls} transition={{ duration: 0.5 }} custom={1}>
          <div style={buttonStyle}>
            <TwitterLink />
            <span>Twitter</span>
          </div>
        </motion.div>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={controls} transition={{ duration: 0.5 }} custom={2}>
          <div style={buttonStyle}>
            <LiquidexLink />
            <span>Liquidex</span>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ y: 100, opacity: 0 }} animate={controls} transition={{ duration: 0.5 }} custom={1}>
          <div style={buttonStyle}>
          <Button
          variant="contained"
          style={{ ...buttonStyle, backgroundColor: 'grey', color: 'white', padding: '20px 40px', fontSize: '20px' }}
          href="https://drive.google.com/file/d/1_M5ICaYIyx4flpmg9BX5BY5PVidXyuw3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my resume
        </Button>
          </div>
        </motion.div>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={controls} transition={{ duration: 0.5 }} custom={2}>
          <div style={buttonStyle}>
          <a href={`mailto:${email}`} style={{ marginLeft: '10px', textDecoration: 'none' }}>
          <Button style={{ ...buttonStyle, backgroundColor: 'red', color: 'white', padding: '20px 40px', fontSize: '20px' }}>
            Email Me
            </Button>
            </a>
          </div>
        </motion.div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '130px' }}>
      </div>
    </div>
  );
}

       

