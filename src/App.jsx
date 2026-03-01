import { useState, useEffect } from 'react';
import Home from './screens/home.screen';
import Detect from './screens/detect.screen';

export default function App() {
  //add enums to represent states within the timer window
  const STATES = {
    IDLE: "IDLE",
    ACTIVE: "ACTIVE",
    COMPLETE: "COMPLETE"
  };

  //set default state of start button to false
  const [state, setState] = useState(STATES.IDLE);
  const [isValid, setIsValid] = useState(false);

  //check if start button changed to active enum
  useEffect(() => {
    if (state !== STATES.ACTIVE) {
      return;
    }

    const timer = setTimeout(() => {
      // if valid gesture detected prevent from going to id
      if (isValid) {
        setState(STATES.COMPLETE)
        return;
      }
      setState(STATES.IDLE);
    }, 15000);


    return () => clearTimeout(timer)
  }, [state, isValid]);

  return (
    //show the detect screen only when start is true
    <div>
      {/* {state === STATES.IDLE && <Home onStart={() => setState(STATES.ACTIVE)} />}
      {state === STATES.ACTIVE && <Detect />} */}

      {state === STATES.IDLE && <Detect valDetect={setIsValid} />}
    </div>
  );
}