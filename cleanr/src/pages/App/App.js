import { Switch, Route, Link} from 'react-router-dom';
import './App.css';
import React,{useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import MapPage from '../MapPage/MapPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <header className="App-header">cleanR</header>
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