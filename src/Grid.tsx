import { Grid } from "@mui/material";
import './App.css'

interface BasicGridProps{
  palavra: string;
}

  export default function BasicGrid({palavra=""}:BasicGridProps) {

    const letras = palavra.split("");
    return (
      <div className="grid-container">
          {letras.map((letra: string) => {
            return(
              <span className="quadrado">
                  {letra}
              </span>
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