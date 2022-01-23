import './App.css';
import Switch from './components/Switch';
import React,{ useState} from 'react';
function App() {
  const[value1,setValue1] = useState("OFF");
  const[value2,setValue2] = useState("OFF");
  return (
    <div className="app">
      <div className = "container">
       <Switch value = {value1} changeValue = {() =>setValue1(value1==="OFF"?"ON":"OFF")} />
       <Switch value = {value2} changeValue = {() =>setValue2(value2==="OFF"?"ON":"OFF")} />
      </div>
    </div>
  );
}

export default App;
