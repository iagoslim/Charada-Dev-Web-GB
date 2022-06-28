import { useState } from 'react'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'
import { palavraRandom } from './listaDePalavras'

let palavraCorreta = palavraRandom();

function App() {
  console.log(palavraCorreta)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isGameWin, setIsGameWin] = useState(false)
  const [linha, setLinha] = useState(0)
  const [coluna, setColuna] = useState(0)
  const [tentativa, setTentativa] = useState([" ", " ", " ", " ", " "])
  const [matriz, setMatriz] = useState([
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ])

  
  function handleKeyPress(tecla: string){
    //const index = tentativa.findIndex((item)=> item===" ");
    
    if(tecla === "DELETE [X]" && coluna > 0 && isGameOver === false){
        tentativa[coluna-1] = " "
        setTentativa([...tentativa])
        console.log(tentativa)
        console.log(coluna-1)
        matriz[linha] = tentativa;
        setMatriz([...matriz]);
        setColuna(coluna-1)
    }
    else if (coluna<=4 && tecla.length === 1){
      tentativa[coluna] = tecla;
      setTentativa([...tentativa]);
      matriz[linha] = tentativa;
      setMatriz([...matriz]);
    
      let temp = coluna;
      temp++
      setColuna(temp);
      console.log(coluna)
    }
    
      else if(tecla === "ENTER" && coluna === 5){
        setLinha(linha+1);
        if (validaTentativa(tentativa) === false){
          if(linha < 5){
            setTentativa([" ", " ", " ", " ", " "]);
            setColuna(0);
          }else{
            setIsGameOver(true)
            console.log(isGameOver)
            console.log("Fim de jogo malandro!");
          }
        }else{
          setIsGameWin(true)
          console.log("Parabéns!");
        }
      }
    
  }
 
  function validaTentativa(palavra: string[]){
    let palavraString = ''
    palavra.map((letra,index)=>{
      console.log(letra)
      palavraString = palavraString.concat(letra)
    })
    console.log(palavra)
    console.log(palavraString)
    if (palavraString === palavraCorreta.toUpperCase() ){
      return true;
    }else{
      return false;
    }
  }

  function novoJogo(){
    setIsGameOver(false)
    setIsGameWin(false)
    setMatriz([
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
    ]) 
    setColuna(0)
    setLinha(0)
    setTentativa([" ", " ", " ", " ", " "])
    palavraCorreta = palavraRandom()
  }

  return (
    <div className="App">
            {isGameOver && (
            <div className='game-over'> 
            Não foi dessa vez !
            <p>A palavra era: {palavraCorreta}</p>
            <button onClick={()=>novoJogo()}>Novo tentativa</button>
            </div>
          )}
             {isGameWin && (
            <div className='game-win'> 
            Acertou !!!
            <p>{palavraCorreta}</p>
            <button onClick={()=>novoJogo()}>Novo Jogo</button>
            </div>
          )}
      <header className="App-header">
        <p>CHARADA</p>
        <BasicGrid palavra={matriz[0].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 0)}/>
        <BasicGrid palavra={matriz[1].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 1)}/>
        <BasicGrid palavra={matriz[2].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 2)}/>
        <BasicGrid palavra={matriz[3].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 3)}/>
        <BasicGrid palavra={matriz[4].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 4)}/>
        <BasicGrid palavra={matriz[5].join("")} palavraCorreta={palavraCorreta} valida = {(linha > 5)}/>
        <p>
        <Teclado onKeyPress={handleKeyPress}/>
        </p>
        <p>\\\\\\\\\\ {tentativa.join("")} //////////</p>
      </header>
    </div>
  )
}

export default App
