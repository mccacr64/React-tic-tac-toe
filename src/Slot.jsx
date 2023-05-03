import { useState } from 'react'
import './css/style.css'

function Slot(props) {

  return (
    <>
        <div className='tic-tac-toe--slot' onClick={props.onClick}>{props.input}</div>
    </>
  )
}

export default Slot