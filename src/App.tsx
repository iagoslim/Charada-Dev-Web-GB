import { useState } from 'react'
import { useStore } from './storePersist'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'




function App() {
  const state = useStore()
  const [word, setWord] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <p>Charada dos guri</p>
        <div>
          <input className='w-full p-2 border-2 border-violet-500 m-2 bg-black' type="text" value={word} onChange={
            e => setWord(e.target.value)} />
        </div>
        <main className='grid grid-rows-6 gap-4'>
          <BasicGrid palavra={word} />
          <BasicGrid palavra='     ' />
          <BasicGrid palavra='     ' />
          <BasicGrid palavra='     ' />
          <BasicGrid palavra='     ' />
          <BasicGrid palavra='     ' />

        </main>
<div className='mt-5'>
<Teclado />

</div>


      </header>
    </div>
  )
}

export default App
