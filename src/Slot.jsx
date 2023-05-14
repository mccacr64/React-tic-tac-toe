import { useState } from "react";
import "./css/style.css";


function Slot(props) 
  // Good use of another component. I know it's just one div, but uslaly best to create a new css file just for this component. 
  // EX: import "./css/slot.css";
  return (
    <>
      <div className="tic-tac-toe--slot" onClick={props.onClick}>
        {props.input}
      </div>
    </>
  );


export default Slot;
