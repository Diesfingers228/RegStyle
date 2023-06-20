import React from 'react';
import { useState } from 'react';
import Welcome from './Мои компоненты/Welcome';
import Tablereg from './Мои компоненты/Tablereg';

function App() {
  const [reg, setReg] = useState(false)

  return (
    <>
    {reg == 3? <Welcome setReg={setReg} /> : <Tablereg setReg = {setReg} />}
    </>
  );
}

export default App;
