import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useState} from 'react';
import {Calculator} from './components/Calculator/Calculator';
import {History} from './components/History/History';

function App() {
  const [list, setList] 
  = useState([""]);

  const handleCalculated = (calculation:string|never):void=> {
    console.log(calculation);

    //if(typeof calculation === 'string')
    //{
      setList([...list, calculation]);
    //}
  }

  console.log(list);

  return (
    <div className="App">
      <Calculator onCalculated={handleCalculated}/>
      <History list = {list} maxLength={10}/>
    </div>
  );
}

export default App;