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
      var cores = validaLetras();
      switch (cores[index]){
        case "G":
          return "#61CA90"; 
        case "Y":
          return "#FFFF00" ; 
        case "R":
          return "#B0C4DE"; 
      }

/*
      if(!correta.includes(letras[index].toLocaleLowerCase())){
        return "#B0C4DE"
      }
      
      if(letras[index] === correta[index].toUpperCase() ){
        return "#61CA90"  
      }
      return "#FFFF00" 
*/ 
    }

    function validaLetras(){
/*
      cores
      W - white      "#FFFFFF"   
      G - Green      "#61CA90"  
      Y - Yellow      "#FFFF00"  
      R - Red but Grey      "#B0C4DE"
*/
      var cores = ["R", "R", "R", "R", "R"];
      var aux = [];
      for(var i = 0; i< correta.length; i++){
        if(letras[i] === correta[i].toUpperCase() ){
          cores[i] = "G";
        }else{
          aux.push(letras[i].toUpperCase());
        }
      }

      for(var i = 0; i< correta.length; i++){
        if(cores[i] != "G"){
          for(var j = 0; j< aux.length; j++){
            if(aux[j] === correta[i].toUpperCase()){
              cores[i] = "Y";
              aux.splice(j,1);
              break;
            }
          }
        }
      }
      return cores
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