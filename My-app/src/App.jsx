import React from 'react';
import { useState } from 'react'
import './App.css';
import Tablereg from './MyComponents/Tablereg';
import Welcome from './MyComponents/Welcome';

function App() {
  const [reg, setReg] = useState(localStorage.getItem('password'));
  
 return (
  
   <>
   {reg? <Welcome setReg={setReg}  /> : <Tablereg setReg={setReg} /> }
    </>
  
  );
}

export default App;
