import { useState } from "react";
import "./App.css";
import Board from "./components/Board";


function App() {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0); //이동을 저장하기 위해서

const caculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && 
        squares[a] === squares[c]) {
          return squares[a];
        }
    }
    return null;
  }
  

const current = history[stepNumber];  
const winner = caculateWinner(current.squares); //승자

let status;

if (winner) {
  status = 'Winner: ' + winner;
}else {
  status = `Next Player: ${xIsNext? 'X' : 'O'}`;
}

const handleClick = (i) => {
  const newHistory = history.slice(0,stepNumber + 1); //시간 되돌리기
  const newCurrent = newHistory[newHistory.length-1]; //현재의 아이템만
  const newSquares = current.squares.slice(); //원본의 복사본 생성
  if (caculateWinner(newSquares) || newSquares[i]) {
    return;
  }

  newSquares[i] = xIsNext? 'X' : 'O';
  setHistory([...newHistory, {squares: newSquares}]); //새로운 history
  setXIsNext(prev => !prev);

  setStepNumber(newHistory.length);
}

const moves = history.map((step,move) => {
  const desc = move?
  'Go to move #' + move :
  'Go to game start';
  return (
    <li key={move}>
     <button className = "move-button" onClick = {() => jumpTo(move)}>{desc}</button>
    </li>
  )
})

//버튼을 누르면 되돌아감.
const jumpTo = (step) => {
  setStepNumber(step);
  // 이동했을 때 'X'인지 'O'인지 알아야 하기 때문에
  setXIsNext((step % 2) === 0);
}

  return (
    <div className = "game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className = "status">{status}</div>
        <ol style = {{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
