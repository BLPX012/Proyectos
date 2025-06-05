import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
  return (
    <seciton className='App'>
    <TwitterFollowCard isfollowing={false} name="Netflix" userName="netflix" />
    <TwitterFollowCard isfollowing name="Lionel Andres Messi Cuchitinni " userName="messi" />
    </seciton>
  )
}
