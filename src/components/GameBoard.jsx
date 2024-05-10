const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, column} = square;
    gameBoard[row][column] = player;
  }

  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();

    //check_end_the_round_state() ?
  }
  */

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
