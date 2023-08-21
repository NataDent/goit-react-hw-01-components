export const Profile = ({user:username, tag, location, avatar, stats}) => {
    return (
    <div className='profile'>
        Profile
        <div className="description">
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
            </div>

       <ul className="stats"> 
    <li>
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
        </div>
    )
}
