import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useState} from 'react';
import {Calculator} from './components/Calculator/Calculator';
import {History} from './components/History/History';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Calculator onChange={setList}/>
      <History  />
    </div>
  );
}

export default App;