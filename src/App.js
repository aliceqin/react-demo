import React,{useState} from 'react';
import './App.css';
import InputNumber from './InputNumber/inputNumber'

function App(){
  const [value,setValue] = useState('aaa')

  return (
    <div className="App">
      <InputNumber value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <InputNumber defaultValue={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  );
}

export default App;
