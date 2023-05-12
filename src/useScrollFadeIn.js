import { useState, useEffect } from 'react';

const useScrollFadeIn = (fadeInOffset = 100) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > fadeInOffset) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return visible;
};

export default useScrollFadeIn;
