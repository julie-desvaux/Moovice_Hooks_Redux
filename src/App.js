import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Discover from './Views/Discover/Discover';
import Popular from './Views/Popular/Popular';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Discover />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
