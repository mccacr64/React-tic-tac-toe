import { useEffect, useState } from 'react'
import Slot from './Slot'
import './css/style.css'

function Board() {
// Turns
let winner;
  const [turn, setTurn] = useState(1);
  const player = turn % 2 !== 0 ? 'X' : 'O';


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


useEffect(() =>{
  CheckWin(player)
}, [input])

// const inputHandler = () => {}
function inputHandler(i){
  const fillSlot = input.slice();
  if(!fillSlot[i]){
    if(turn < 10){
      if(player){
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
  
function incTurn(){
  setTurn(turn + 1)
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
        {[...Array(9)].map((index) => {
          return (
            <Slot input={input[index]} onClick={() => inputHandler(index)} />
          );
        })}
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
