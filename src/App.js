import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar'
import Discover from './Views/Discover/Discover'
import Popular from './Views/Popular/Popular'
import MovieDetails from './Views/MovieDetails/MovieDetails'
import ListSearch from './Views/ListSearch/ListSearch'
import ActorDetails from './Views/ActorDetails/ActorDetails'

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
        <Route exact path="/search/:search">
          <ListSearch />
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/actor/:id">
          <ActorDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
