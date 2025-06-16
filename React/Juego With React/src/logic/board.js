import { WINNER_COMBOS } from '../contans.js'

export const checkWinner = (boardCheck) => {
    // Revisamos todas las combinaciones ganadoras, para ver quien ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]) {
        return boardCheck[a]
      }
    }
    return null
  }