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
    if (isValid) {
      setState(STATES.COMPLETE);
      setIsValid(false);
      return;
    }

    const timer = setTimeout(() => {
      setState(STATES.IDLE);
    }, 15000);


    return () => clearTimeout(timer);
  }, [state, isValid]);

  return (
    //show screen depending on state enum
    <div>
      {state === STATES.IDLE && <Home onStart={() => setState(STATES.ACTIVE)} />}
      {state === STATES.ACTIVE && <Detect valDetect={setIsValid} />}
      {state === STATES.COMPLETE && <Complete returnHome={() => setState(STATES.IDLE)} />}
    </div>
  );
}