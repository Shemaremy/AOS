import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();

  

  AOS.init({
    
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });


  return (
    <div className='wrapper'>
      <div className='Part1'>
        <h1>Main one</h1>
      </div>
      <div className='Part2' data-aos="fade-up">
        <h1 data-aos="fade-left">Fade up</h1>
      </div>
      <div className='Part3' data-aos="fade-right"></div>
      <div className='Part4' data-aos="fade-left"></div>
      <div className='Part5' data-aos="fade-down"></div>
    </div>
  )
}

export default App
