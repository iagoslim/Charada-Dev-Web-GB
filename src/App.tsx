import { useState } from 'react'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'
import { palavraRandom, getAllPalavras } from './listaDePalavras'

let palavraCorreta = palavraRandom();
//let palavraCorreta = "AABCB"

function App() {
  const [isInvalidWord, setIsInvalidWord] = useState(false)
  const [isWordShort, setIsWordShort] = useState(false)
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


  function validateValidWord(){
/*    let isValidWord = false
    getAllPalavras().map((palavra)=>{
      if(palavra.toUpperCase() === tentativa.toString().replaceAll(',','')){
        isValidWord = true   

      }
     
    })
    return isValidWord
 */
    return true
  }


  function handleKeyPress(tecla: string) {
    //const index = tentativa.findIndex((item)=> item===" ");

    if (tecla === "DELETE [X]" && coluna > 0 && isGameOver === false) {
      tentativa[coluna - 1] = " "
      setTentativa([...tentativa])
    
      matriz[linha] = tentativa;
      setMatriz([...matriz]);
      setColuna(coluna - 1)
    }
    else if (coluna <= 4 && tecla.length === 1) {
      tentativa[coluna] = tecla;
      setTentativa([...tentativa]);
      matriz[linha] = tentativa;
      setMatriz([...matriz]);

      let temp = coluna;
      temp++
      setColuna(temp);
    
    }

    else if (tecla === "ENTER" && coluna === 5 ) {

      if (!validateValidWord()){
        setIsInvalidWord(true)
        return
      }
     setIsInvalidWord(false)

      setLinha(linha + 1);
      setIsWordShort(false)
      if (validaTentativa(tentativa) === false) {
        if (linha < 5) {
          setTentativa([" ", " ", " ", " ", " "]);
          setColuna(0);
        } else {
          setIsGameOver(true)
       
        }
      } else {
        setIsGameWin(true)
   
      }
    }
    else if (tecla === "ENTER" && coluna < 5) {
      setIsWordShort(true)

      setTimeout(() => {
        setIsWordShort(false)
      }, 7000);

    }

  }

  function validaTentativa(palavra: string[]) {
    let palavraString = ''
    palavra.map((letra, index) => {
      
      palavraString = palavraString.concat(letra)
    })
 
    if (palavraString === palavraCorreta.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }

  function novoJogo() {
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
          <button onClick={() => novoJogo()}>Novo tentativa</button>
        </div>
      )}
      {isGameWin && (
        <div className='game-win'>
          Acertou !!!
          <p>{palavraCorreta}</p>
          <button onClick={() => novoJogo()}>Novo Jogo</button>
        </div>
      )}


      <header className="App-header">
        <p>CHARADA</p>
        {isWordShort && (
          <div className='short-word'>
             Insira uma palavra com 5 letras
            <button className='close' onClick={()=>{
              setIsWordShort(false)
            }}><i className="gg-close"></i></button>
             
          </div>
        )}
         {isInvalidWord && (
          <div className='short-word'>
             Palavra não encontrada
            <button className='close' onClick={()=>{
              setIsInvalidWord(false)
            }}><i className="gg-close"></i></button>
             
          </div>
        )}
        {matriz.map((value, index) => {
          return (
            <BasicGrid palavra={matriz[index].join("")} palavraCorreta={palavraCorreta} valida={(linha > index)} />

          )
        })}

        <p>
          <Teclado onKeyPress={handleKeyPress} />
        </p>
      </header>

    </div>
  )
}

export default App
