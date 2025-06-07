import {useState} from 'react'

export function TwitterFollowCard ({userName, name}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const addAt = (username) => `@${username}`
  const imgSrc = `https://unavatar.io/google/${userName}.com`
  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return(
    <article className='tw-followCard' >
      <header className='tw-followCard-header' >
        <img
          className='tw-followCard-avatar' 
          src={imgSrc} 
          alt="Avatar Netflix" />
        <div>
          <strong>{name}</strong>
          <span>{addAt(userName)}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick}>
          {text}
        </button>
      </aside>

    </article>   
  )
}