export function TwitterFollowCard ({userName, name, isfollowing}) {
    const addAt = (username) => `@${username}`
    const imgSrc = `https://unavatar.io/google/${userName}.com`
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
        <button>
          Seguir
        </button>
      </aside>

    </article>   
    )
}