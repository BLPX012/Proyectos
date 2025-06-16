import {useState} from 'react'
import confetti from 'canvas-confetti'

import { Square } from './Components/Square'
import { TURNS } from './contans.js'
import { checkWinner } from './logic/board.js'
import { WinnerModal } from './Components/WinnerModal.jsx'

function App() {
  // Estado del tablero por si hay una partida guardada
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) // Null es que no hay ganador, false que hay empate

  

  const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

  const checkEndGame = (newBoard) => {
    // Revisamos si hay un empaate
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if(board[index] || winner ) return
    
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambair el turno
    const  newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Local Storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // Revisamos si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      // Si hay un ganador, mostramos el ganador
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false) // Es un empate
    }
  }

  return (
    <main className="board">
      <hi>TRIQUI</hi>
      <button onClick={resetGame}> Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) =>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
