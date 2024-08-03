import React, { useState, useEffect } from 'react';
import Preloader from './Preloader'; // Fixed import path
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  //------------------------------------------- PRELOADER --------------------------------------------------
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  //------------------------------------------- AOS --------------------------------------------------
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 2000,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='wrapper'>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className='Part1'>
            <h1>Main one</h1>
          </div>
          <div className='Part2' data-aos="fade-up">
            <h1 data-aos="fade-left">Fade up</h1>
          </div>
          <div className='Part3' data-aos="fade-right"></div>
          <div className='Part4' data-aos="fade-left"></div>
          <div className='Part5' data-aos="fade-down"></div>
        </>
      )}
    </div>
  );
}

export default App;
