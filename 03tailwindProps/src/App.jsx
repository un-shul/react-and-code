import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tailwind test</h1>
      <br></br>
      <Card startText="hi" imgText="img1" />
      <br></br>
      <Card startText="bye" imgText="img2"/>
      <br></br>
      <Card />
    </>
  )
}

export default App
