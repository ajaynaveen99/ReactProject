import { useState } from "react";
import "./App.css";

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    
    console.log(board[a]&&board[a] ===board[b]&&board[a]===board[c])
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {  
      return board[a];
    }
  }
  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));//
  const [isXNext, setIsXNext] = useState(true);

  // Score state
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const winner = calculateWinner(board);
  console.log(winner)

  function handleClick(index) {
    if (board[index] || winner) return;
    console.log(board[index],winner)


    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function restartGame() {
    if (winner === "X") setXScore(xScore + 1);
    if (winner === "O") setOScore(oScore + 1);
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="app">
      <div className="game">
        <h1>Tic Tac Toe</h1>

        <div className="scoreboard">
          <span> X: {xScore}</span>
          <span> O: {oScore}</span>
        </div>

        <div className="status">
          {winner
            ? `Winner: ${winner}`
            : `Next Player: ${isXNext ? "X" : "O"}`}
        </div>

        <div className="board">
          {board.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value}
            
            </button>
          ))}
        </div>

        <button className="restart" onClick={restartGame}>
          Restart
        </button>
      </div>
    </div>
  );
}
