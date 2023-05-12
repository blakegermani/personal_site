import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from './useScrollPosition';
import Headshot from './images/headshot.jpeg';
import Face from './images/face.jpg';
import Friends from'./images/friends.JPG';
import Hannah from './images/girlfriend.jpg';
import Marmon from './images/marmon.JPG';
import Barca from './images/barca.png';
import PSG from './images/psg.JPG';
import BCFB from './images/Catie_abigail.png';

const Images = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <motion.img
        src={Headshot}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={BCFB}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />    
      <motion.img
        src={PSG}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Face}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Friends}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Hannah}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Marmon}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Barca}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Headshot}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Face}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
       <motion.img
        src={Headshot}
        style={{ border: '5px solid transparent' }}
        width="254"
        height="200"
        alt="Headshot of Blake1"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={Face}
        style={{ border: '5px solid transparent' }}
        width="200"
        height="200"
        alt="Headshot of Blake2"
        initial={false}
        animate={{ x: scrollPosition * 10 }} // Adjust sensitivity here
        transition={{ duration: 0.5 }}
      />      
    </div>
  );
};

export default Images;
