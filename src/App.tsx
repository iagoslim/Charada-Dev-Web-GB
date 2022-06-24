import { useState } from 'react'
import './App.css'
import BasicGrid from './Grid'
import Teclado from './TecladoModelo'


function App() {
  let isGameOver = false
  let isGameWin = false
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
    
    if(tecla === "DELETE [X]" && coluna > 0){
      console.log(coluna);
      setColuna(coluna-1);
      console.log(coluna);
      tentativa[coluna] = " ";
      setTentativa([...tentativa]);
      matriz[linha] = tentativa;
      setMatriz([...matriz]);
    }else{
      if (coluna<=4){
        tentativa[coluna] = tecla;
        setTentativa([...tentativa]);
        matriz[linha] = tentativa;
        setMatriz([...matriz]);
        console.log(coluna);
        const temp = coluna+1;
        setColuna(temp);
        console.log(coluna);
      }else if(tecla === "ENTER"){
        if (validaTentativa(tentativa) === false){
          if(linha < 5){
            setLinha(linha+1);
            setTentativa([" ", " ", " ", " ", " "]);
            setColuna(0);
          }else{
            console.log("Fim de jogo malandro!");
          }
        }else{
          console.log("Parabéns!");
        }
      }
    }
  }

  function validaTentativa(palavra: string[]){
    if (palavra[0] === "C" &&
        palavra[1] === "A" && 
        palavra[2] === "R" &&
        palavra[3] === "R" &&
        palavra[4] === "O"
    ){
      return true;
    }else{
      return false;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>CHARADA</p>
        <BasicGrid palavra={matriz[0].join("")}/>
        <BasicGrid palavra={matriz[1].join("")}/>
        <BasicGrid palavra={matriz[2].join("")}/>
        <BasicGrid palavra={matriz[3].join("")}/>
        <BasicGrid palavra={matriz[4].join("")}/>
        <BasicGrid palavra={matriz[5].join("")}/>
        <p>
        <Teclado onKeyPress={handleKeyPress}/>
        </p>
        <p>\\\\\\\\\\ {tentativa.join("")} //////////</p>
      </header>
    </div>
  )
}

export default App
