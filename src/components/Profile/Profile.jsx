import s from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.main}>
      <div className={s.profInfo}>
        <img className={s.img} src={user.avatar} alt={user.username} />
        <p>{user.username}</p>
        <p>@p{user.tag}</p>
        <p>{user.location}</p>
      </div>
      <ul className={s.profList}>
        <li className={s.profLink}>
          <span>Followers</span>
          <span>{user.stats.followers}l</span>
        </li>
        <li className={s.profLink}>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li className={s.profLink}>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
