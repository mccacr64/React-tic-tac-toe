import { useState, useEffect } from "react";
import Slot from "./Slot";
import "./css/style.css";

function Board() {
  // Turns
  let winner;
  const [turn, setTurn] = useState(1);

  function incTurn() {
    setTurn(turn + 1);
  }
  // Who's Turn
  const [input, setInput] = useState(["", "", "", "", "", "", "", "", ""]);

  // I think this will be called too many times. You should use a useEffect here. useEffect is basically used for tracking that something changed, then you can do something. Ex below. Also put a console log out here vs the useEffect, see how many times they log. The on outside should be called too many times.
  CheckWin("X");
  CheckWin("O");

  useEffect(() => {
    // on input change do something. We probably want to Check the win in here.
    // Also I don't think we need to call check win twice. We only want to check the win of who just played. Otherwise were calling check win on a player who hasn't changed anything.
    // CheckWin(variable that tracks which player is up)
    // Or CheckWin(turn % 2 !== 0 ? 'X' : 'Y')
    // The above is a shorthand if else. const isMac = "Mac" === "bmac" ? true : false
  }, [input]);
  // the variables that you want to listen to go inside the array [] above

  function inputHandler(i) {
    const fillSlot = input.slice();
    if (!fillSlot[i]) {
      if (turn < 10) {
        if (turn % 2 !== 0) {
          fillSlot[i] = "X";
          setInput(fillSlot);
        } else {
          fillSlot[i] = "O";
          setInput(fillSlot);
        }
      }
      incTurn();
    }
  }

  // Check Wins
  function CheckWin(player) {
    // Winning Arrays

    // use const = victory. Const is used when the value doesn't change.
    let victory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < victory.length; i++) {
      if (
        // How can X ever equal the victory values?
        player &&
        input[victory[i][0]] === player &&
        input[victory[i][1]] === player &&
        input[victory[i][2]] === player
      ) {
        console.log(`Player ${player} Wins!`);
        winner = `Player ${player} Wins!`;
      }
    }
    if (turn >= 10) {
      winner = "Draw!";
    }
  }

  return (
    <>
      <div className="tic-tac-toe--board">
        {/* React is data driven. You usually want to render content based on data, rather than manually adding all these divs. Reason being, more code the change, and it's cleaner to just write on div. See below.*/}
        {[...Array(9)].map((index) => {
          return (
            <Slot input={input[index]} onClick={() => inputHandler(index)} />
          );
        })}
        {/* <Slot input={input[0]} onClick={() => inputHandler(0)} />
        <Slot input={input[1]} onClick={() => inputHandler(1)} />
        <Slot input={input[2]} onClick={() => inputHandler(2)} />
        <Slot input={input[3]} onClick={() => inputHandler(3)} />
        <Slot input={input[4]} onClick={() => inputHandler(4)} />
        <Slot input={input[5]} onClick={() => inputHandler(5)} />
        <Slot input={input[6]} onClick={() => inputHandler(6)} />
        <Slot input={input[7]} onClick={() => inputHandler(7)} />
        <Slot input={input[8]} onClick={() => inputHandler(8)} /> */}
      </div>

      <div className="my--button--container">
        <button className="my--button" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>

      {winner && <h2>{winner}</h2>}
    </>
  );
}

export default Board;
