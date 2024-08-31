import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendsWrap}>
        {friends.map((friends) => (
          <li key={friends.id}>
            <FriendListItem
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
