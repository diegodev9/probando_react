import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {
  console.log(`https://unavatar.io/${userName}`)

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'following' : 'unfollowing'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className={'tw-followCard'}>
      <header className={'tw-followCard-header'}>
        <img
          className={'tw-followCard-avatar'}
          src={`https://unavatar.io/${userName}`}
          alt="robohash"/>
        <div
          className={'tw-followCard-info'}>
          <strong>
            {children}
          </strong>
          <span
            className={'tw-followCard-infoUserName'}>
            @{userName}
          </span>
        </div>
      </header>
      <aside>
        <button
          className={`tw-followCard-followButton ${buttonClassName}`}
          onClick={handleClick}>
          <span className={'tw-followCard-originalTextButton'}>{ text }</span>
          <span className={'tw-followCard-stopFollow'}>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}