import { useState } from "react";
import Square from "./Square";
export default function Board(){
    const [squares, setSquares]=useState(Array(9).fill(null));
    function HandleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i]="X"
    setSquares(nextSquares);
    }

    return (
    <>
    <div  className="board-row">

<Square value={squares[0]} onSquareClick={()=> HandleClick(0)}/>
<Square value={squares[1]} onSquareClick={()=> HandleClick(1)}/>
<Square value={squares[2]} onSquareClick={()=> HandleClick(2)}/>
    </div>

    <div  className="board-row">

<Square value={squares[3]} onSquareClick={()=> HandleClick(3)}/>
<Square value={squares[4]} onSquareClick={()=> HandleClick(4)}/>
<Square value={squares[5]} onSquareClick={()=> HandleClick(5)}/>
    </div>

    <div  className="board-row">
<Square value={squares[6]} onSquareClick={()=> HandleClick(6)}/>
<Square value={squares[7]} onSquareClick={()=> HandleClick(7)}/>
<Square value={squares[8]} onSquareClick={()=> HandleClick(8)}/>
    </div>
    
    </>

);

    
}