import './App.css'

interface BasicGridProps{
  palavra: string;
  palavraCorreta: string;
  valida: boolean;
}

  export default function BasicGrid(props:BasicGridProps) {
    const letras = props.palavra.split("");
    const correta = props.palavraCorreta.split("");
    
    function setCor(index: number){
      if(!props.valida){
        return "#FFFFFF"
      }
      if(!correta.includes(letras[index].toLocaleLowerCase())){
        return "#B0C4DE"
      }
      if(letras[index] === correta[index].toUpperCase() ){
        return "#61CA90"  
      }
      return "#FFFF00"
    }

    return (
      <div className="grid-container">
          {letras.map((letra: string, index:number) => {
            return(
                <span className="quadrado" key={index}  style={{backgroundColor: setCor(index)}}>
                  {letra}
                </span>       
            )
          })}
      </div>

    );
  }