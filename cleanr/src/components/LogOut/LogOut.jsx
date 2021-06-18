import './LogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="LogOut">
      {user ? <div>
        <div>{user.displayName}</div>
        <div className="email">{user.email}</div>
        <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>:null}
        </div>
      
  );
}