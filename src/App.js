import './App.scss'
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
import NotFound from './Views/NotFound/NotFound'

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
        <Route exact path="/actor/:id">
          <ActorDetails />
        </Route>
        <Route exact path="/:media_type/:id">
          <MovieDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
