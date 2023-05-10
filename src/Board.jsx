import { useState } from 'react'
import Slot from './Slot'
import './css/style.css'

function Board() {
// Turns
let winner;
const[turn, setTurn] = useState(1)

function incTurn(){
  setTurn(turn + 1)
}
// Who's Turn
const [input, setInput] = useState([
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
])

CheckWin("X");
CheckWin("O");

function inputHandler(i){
  const fillSlot = input.slice();
  if(!fillSlot[i]){
    if(turn < 10){
      if(turn % 2 !== 0){
        fillSlot[i] = "X";
        setInput(fillSlot);
      }else{
        fillSlot[i] = "O";
        setInput(fillSlot);
      }
    }
    incTurn()
  }
}

// Check Wins
function CheckWin(player){

  // Winning Arrays

  let victory = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i < victory.length; i++){
    if(player && 
      input[victory[i][0]] === player && 
      input[victory[i][1]] === player && 
      input[victory[i][2]] === player){
        console.log(`Player ${player} Wins!`)
        winner = `Player ${player} Wins!`
      }
    }  
    if(turn >= 10){
      winner = "Draw!"
    }
  }
  

  return (
    <>
        <div className='tic-tac-toe--board'>
          <Slot 
            input={input[0]}
            onClick={() => inputHandler(0)}
          />
          <Slot 
            input={input[1]}
            onClick={() => inputHandler(1)}
          />
          <Slot 
            input={input[2]}
            onClick={() => inputHandler(2)}
          />
          <Slot 
            input={input[3]}
            onClick={() => inputHandler(3)}
          />
          <Slot 
            input={input[4]}
            onClick={() => inputHandler(4)}
          />
          <Slot 
            input={input[5]}
            onClick={() => inputHandler(5)}
          />
          <Slot 
            input={input[6]}
            onClick={() => inputHandler(6)}
          />
          <Slot 
            input={input[7]}
            onClick={() => inputHandler(7)}
          />
          <Slot 
            input={input[8]}
            onClick={() => inputHandler(8)}
          />
        </div>

        <div className='my--button--container'>
          <button 
              className='my--button'
              onClick={() => window.location.reload()}>Reset</button>
        </div>

        {winner && <h2>{winner}</h2>}
    </>
  )
}

export default Board
