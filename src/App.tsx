import { useState } from 'react'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'

const matriz = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CHARADA</p>
        <BasicGrid palavra = '     '/>
        <BasicGrid palavra = '     '/>
        <BasicGrid palavra = '     '/>
        <BasicGrid palavra = '     '/>
        <BasicGrid palavra = '     '/>
        <p>
        <Teclado/>
        </p>
        <p>\\\\\\\\\\ TECLADO //////////</p>
      </header>
    </div>
  )
}

export default App
