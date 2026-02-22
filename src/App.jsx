import { useState, useEffect } from 'react';
import Home from './screens/home.screen';
import Detect from './screens/detect.screen';

function App() {
  //set default state of start button to false
  const [start, setStart] = useState(false);

  //check if start button changed to true value
  useEffect(() => {
    if (start) {
      console.log("prop drill worked");
      setTimeout(() => {
        //change start button state to false after 15sec
        setStart(false);
      }, 15000)
    }
  }, [start])

  useEffect(() => {
    if (!start) {
      //log that state actually changed back to false after 15sec
      console.log('15sec Ended Back to Home')
    }
  }, [start]);
 
  return (
    //show the detect screen only when start is true
    <div>
      {start ? <Detect /> : <Home setStart={setStart} />}
    </div>
  );
}

export default App;