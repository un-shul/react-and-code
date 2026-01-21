import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let initialVal=0;
  let [counter, setCounter]= useState(initialVal);
  
  const addValue= () =>{
    if (counter<5) setCounter(counter+1);
    
  }

  const subValue= ()=>{
    if (counter>0) setCounter(counter -1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}> Add value</button>
      <br></br>
      <br></br>
      <button onClick={subValue}> Subtract value</button>
    </>
  )
}

export default App
