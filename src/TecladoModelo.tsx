const teclado = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE [X]"],
];


export default function Teclado(props: any) {
  return (
    <div>
      {teclado.map((linha) => {
        return (
          <div>
            {linha.map((tecla) => {
              return (
                <button className="tecla" onClick={() => props.onKeyPress(tecla)}

                >
                  {tecla}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
