import { useState, useEffect } from 'react';
import Home from './screens/home.screen';
import Detect from './screens/detect.screen';

export default function App() {
  //add enums to represent states within the timer window
  const STATES = {
    IDLE: "IDLE",
    ACTIVE: "ACTIVE",
  };

  //set default state of start button to false
  const [state, setState] = useState(STATES.IDLE);

  //check if start button changed to true value
  useEffect(() => {
    if (state !== STATES.ACTIVE) {
      return;
    }

    const timer = setTimeout(() => {
      setState(STATES.IDLE);
    }, 15000);


    return () => clearTimeout(timer)
  }, [state])

  return (
    //show the detect screen only when start is true
    <div>
      {state === STATES.IDLE && <Home onStart={() => setState(STATES.ACTIVE)} />}
      {state === STATES.ACTIVE && <Detect />}
    </div>
  );
}