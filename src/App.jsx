import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./assets/userData.json";
import friends from "./assets/friends.json";
import transactions from "./assets/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
