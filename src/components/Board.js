import Square from './Square'
import "./Board.css";

const Board = ({squares,onClick}) =>  {
    //State : 부모 컴포넌트에서 State를 보관함으로써 자식 Component끼리 통신할 수 있게 됨.
    //value : null 로 설정하면 모든 값들이 null이 되서 안됨.
    //왜냐하면 어떤 값은 X, 어떤 값은 O가 나와야 하는데 일관화가 되어서임.
    //Array.prototype.fill() : 정적인 값 하나로 채움.
    //props로 값을 내려줘야 함.

    //Squre를 랜더링(그려)주는 메소드
    const renderSquare = (i) => {
        //Props이용해서 square에 값을 전달하기
        //함수도 내려줘야 함
        //props이용
        //<자식 컴포넌트 변수명 = {} />
        return (
        <Square value ={squares[i]} 
        onClick={() => onClick(i)}
        />
        );
    }

    return (
      <div className ='board-wrapper'>
        <div className = 'board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className = 'board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className = 'board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
  }


  export default Board;
