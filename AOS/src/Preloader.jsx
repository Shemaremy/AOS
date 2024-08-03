// src/Preloader.js
import React from 'react';
import './App.css';
import { useLoading} from '@agney/react-loading';
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '@agney/react-loading';


const Preloader = () => {

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="50" />,
  });

  return (
    <div className="preloader">
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
    </div>
  );
};

export default Preloader;
