import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./assets/userData.json";
import friends from "./assets/friends.json";

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </>
  );
};
export default App;
