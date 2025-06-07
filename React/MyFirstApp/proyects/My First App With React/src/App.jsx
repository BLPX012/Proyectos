import { use, useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
  const [name, setName] = useState('Netflix')
  return (
    <seciton className='App'>
      <TwitterFollowCard name={name} userName="netflix" />
      <TwitterFollowCard name="Lionel Andres Messi Cuchitinni " userName="messi" />

      <button className = 'buttonChangeName' onClick={() => {
        setName('Disney+')
      }}>Cambiar nombre</button>
    </seciton>
  )
}
