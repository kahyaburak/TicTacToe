export default function GameOver({winner = null}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} has won!` : 'it is a draw'}</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
