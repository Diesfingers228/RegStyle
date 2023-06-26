import React from 'react';
import Welcome from './Мои компоненты/Welcome';
import Tablereg from './Мои компоненты/Tablereg';
import { useSelector } from 'react-redux'


function App() {
const selector = useSelector(state => state.myFirstReducer.onOff);

  return (
    <>
    {selector === 1? <Welcome /> : <Tablereg />}
    </>
  );
}

export default App;
