import { Switch, Route, Link} from 'react-router-dom';
import './App.css';
import React,{useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import MapPage from '../MapPage/MapPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import { getUser } from '../../utilities/users-service';

function App() {
  function getRole(role){
    if (user === null) return null
    if (user.roles){
      if (user.roles.length === 1){
        return user.roles[0].role
      }
      else{
        setToggleView(true)
        return user.roles[0].role
      }
    }
    else{
      return null;
    }
  }
  const [user, setUser] = useState(getUser());
  const [toggleView, setToggleView] = useState(false)
  const [currentRole, setCurrentRole] = useState({role:getRole()})


  // const [currentRole, setCurrentRole] =useState(null);

  // { currentRole ? null:((user.roles.length>1) ? <div>
  //   TOGGLE THE VIEW
  // </div>:setCurrentRole(user.roles[0].role)) }

  return (
    
    <div className="App">
      <header className="App-header">cleanR</header>
      {/* {!toggleView ? <div>
        <button value="agent" className="toggle-role" type="button" onClick={(e)=>{setCurrentRole({role: e.target.value})}}>Agent</button>
        <button value="client" className="toggle-role" type="button" onClick={(e)=>{setCurrentRole({ role: e.target.value})}}>Client</button>
        </div>:null} */}
          <div>{currentRole.role}</div>
          {/* <div>{user}</div> */}
          {/* <div>{user.roles[0].role}</div> */}
      { user ? 
      <Switch>
        <Route path="/appointments">
          <AppointmentsPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/map">
          <MapPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/services">
          <ServicesPage user={user} setUser={setUser}/>
        </Route>
      </Switch>
        :        
        <AuthPage setUser={setUser}/>
      }
      <nav>
        <Link to="/appointments">Appointments</Link>
            |
        <Link to="services">Services</Link>
            |
        <Link to="/map">Map</Link>
            |
        <Link to="/">Home</Link>
      </nav>
      <button onClick={()=>{setUser('Doug')}}>Doug</button>
      <button onClick={()=>{setUser(null)}}>Null</button>
    </div>
  );
}

export default App;