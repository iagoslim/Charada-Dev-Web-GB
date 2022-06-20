import { useState } from 'react'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>CHARADA</p>
        <BasicGrid/>
        <p>
        <Teclado/>
        </p>
        <p>\\\\\\\\\\ TECLADO //////////</p>
      </header>
    </div>
  )
}

export default App
