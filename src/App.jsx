import { useState, useEffect } from 'react';
import Home from './screens/home.screen'

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      console.log("prop drill worked")
    }
  }, [start])
 
  return (
    <div>
      <Home setStart={setStart} />
    </div>
  );
}

export default App;