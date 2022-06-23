import { Grid } from "@mui/material";
import './App.css'

interface BasicGridProps{
  palavra: string;
}





  export default function BasicGrid({palavra}:BasicGridProps) {

    let palavraMontada = palavra.split("");
    return (
      <div className="grid grid-flow-row grid-cols-5 my-2 mx-4 gap-2">
          {palavraMontada.map((letra: string) => {
            return(
              <div key={letra} className="w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-3xl font-bold rounded shadowed bg-gray-300 text-black border-violet-400 ">
                  {letra}
              </div>
          )  
          })}
      </div>

      /*
      <div>
        {matriz.map((linha) => {
          return (
            <div>
              {linha.map((tecla) => {
                return (
                  <div
                    style={{
                      border: 0,
                      backgroundColor: "#818384",
                      borderRadius: "4px",
                      height: "58px",
                      minWidth: "43px",
                      margin: "0 6px 10px 0",
                      padding: "1px 6px",
                      cursor: "pointer",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {tecla}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      */
    );
  }