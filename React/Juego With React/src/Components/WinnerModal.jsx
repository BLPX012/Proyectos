import {Square} from './Square.jsx'

export function WinnerModal({winner, resetGame}) {

    if(winner === null) return null

    const winenrText = winner === false ? 'Empate' : `El ganador es: ${winner}`
    return(
        
          <section className="winner">
            <div className="text">
              <h2>{winenrText}</h2>

              <header className="win">
                {winner && Square({children: winner})}
              </header>
              
              <footer>
                <button onClick={resetGame}>
                  Empezar de Nuevo
                </button>
              </footer>
            </div>
          </section>
        )
      }
    
 