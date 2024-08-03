# 1. USAGE:
-----------

#### a. Install the package by:
        
- npm install aos --save



#### b. Import script, styles and initialize AOS:








-------------------------------------------------------------------------------------------------------


# 2. PRELOADERS:
----------------

- npm i @agney/react-loading

- import { useLoading, Audio } from '@agney/react-loading';

ex: 

    <LoaderKit
    style={{ width: 50, height: 50 }}
    name={'BallPulse'} // Optional: see list of animations below
    color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
    />




### names available:

'1': 'BallPulse',
  '2': 'BallGridPulse',
  '3': 'BallClipRotate',
  '4': 'SquareSpin',
  '5': 'BallClipRotatePulse',
  '6': 'BallClipRotateMultiple',
  '7': 'BallPulseRise',
  '8': 'BallRotate',
  '9': 'CubeTransition',
  '10': 'BallZigZag',
  '11': 'BallZigZagDeflect',
  '12': 'BallTrianglePath',
  '13': 'BallScale',
  '14': 'LineScale',
  '15': 'LineScaleParty',
  '16': 'BallScaleMultiple',
  '17': 'BallPulseSync',
  '18': 'BallBeat',
  '19': 'LineScalePulseOut',
  '20': 'LineScalePulseOutRapid',
  '21': 'BallScaleRipple',
  '22': 'BallScaleRippleMultiple',
  '23': 'BallSpinFadeLoader',
  '24': 'LineSpinFadeLoader',
  '25': 'TriangleSkewSpin',
  '26': 'Pacman',
  '27': 'BallGridBeat',
  '28': 'SemiCircleSpin'
  

### iOS extra animations
 
  '29': 'BallRotateChase',
  '30': 'Orbit',
  '31': 'AudioEqualizer',
  '32': 'CircleStrokeSpin',
  '33': 'BallDoubleBounce'