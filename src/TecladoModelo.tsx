import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const teclado = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"],
];

export default function Teclado() {
  return (
    <div>
      {teclado.map((linha) => {
        return (
          <div>
            {linha.map((tecla) => {
              return <button>{tecla}</button>;
            })}
          </div>
        );
      })}
    </div>
  );
}
