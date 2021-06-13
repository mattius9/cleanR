import { Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import MapPage from '../MapPage/MapPage';
import ServicesPage from '../ServicesPage/ServicesPage';

function App() {


  return (
    <div className="App">
      <header className="App-header">cleanR</header>
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

        
        <AuthPage />

      </Switch>
      <nav>
        <Link to="/appointments">Appointments</Link>
            |
        <Link to="services">Services</Link>
            |
        <Link to="/map">Map</Link>
            |
        <Link to="/">Home</Link>
      </nav>
      
    </div>
  );
}

export default App;