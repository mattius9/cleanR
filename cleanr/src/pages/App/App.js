import { Switch, Route, Link} from 'react-router-dom';
import './App.css';
import React,{useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import MapPage from '../MapPage/MapPage';
import ServicesPage from '../ServicesPage/ServicesPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">cleanR</header>
      { user ? 
      <Switch>
        <Route path="/appointments">
          <AppointmentsPage />
        </Route>
        <Route path="/map">
          <MapPage/>
        </Route>
        <Route path="/services">
          <ServicesPage />
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