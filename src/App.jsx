import { useState } from 'react'
import Header from './Header'
import Board from './Board'
import './css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Board/>
    </>
  )
}

export default App
