import { useState, useEffect } from 'react';
import Home from './screens/home.screen';
import Detect from './screens/detect.screen';

function App() {
  //add enums to represent states within the timer window
  const STATES = {
    IDLE: "IDLE",
    ACTIVE: "ACTIVE",
  };

  //set default state of start button to false
  const [state, setState] = useState(STATES.IDLE);

  //check if start button changed to true value
  useEffect(() => {
    if (state == STATES.ACTIVE) {
      console.log("prop drill worked");
      setTimeout(() => {
        //change start button state to false after 15sec
        setState(STATES.IDLE);
      }, 15000)
    }
  }, [state])

  useEffect(() => {
    if (state == STATES.IDLE ) {
      //log that state actually changed back to false after 15sec
      console.log('15sec Ended Back to Home')
    }
  }, [state]);
 
  return (
    //show the detect screen only when start is true
    <div>
      {state === STATES.IDLE && <Home onStart={() => setState(STATES.ACTIVE)} />}
      {state === STATES.ACTIVE && <Detect />}
    </div>
  );
}

export default App;