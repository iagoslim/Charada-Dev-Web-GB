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
                <button onClick={() => props.onKeyPress(tecla)}
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
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
