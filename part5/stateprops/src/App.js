import React, {useState} from 'react'

import DemoProps from './components/DemoProps'
import DemoState from './components/DemoState'
function App() {
  return (
    <div className="App">
      {/* <DemoProps ms='Hello'/> */}
      <DemoState />
    </div>
  );
}

export default App;
