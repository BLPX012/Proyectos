import { use, useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
  const users = [
    { userName: 'netflix', name: 'Netflix' },
    { userName: 'messi', name: 'Lionel Andres Messi Cuchitinni' },
    { userName: 'disneyplus', name: 'Disney+' },
    { userName: 'google', name: 'Google' },
    { userName: 'apple', name: 'Apple' }
  ]
  const [name, setName] = useState('Netflix')
  return (
      <section className='App-content'>
        {
          users.map(({ userName, name }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
            />
          ))
        }
      </section>
    
  )
}

