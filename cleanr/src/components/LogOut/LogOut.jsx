import './LogOut.css';
//import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    // logOut();
    setUser(null);
  }

  return (
    <div className="LogOut">
      <div>{user}</div>
      <div className="email">doug@yahoo.com</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
