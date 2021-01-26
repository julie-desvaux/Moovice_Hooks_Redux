import './App.scss'
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar'
import MovieDiscover from './Views/Discover/MovieDiscover'
import MoviePopular from './Views/Popular/MoviePopular'
import MovieDetails from './Views/MovieDetails/MovieDetails'
import ListSearch from './Views/ListSearch/ListSearch'
import ListGenre from './Views/ListGenre/ListGenre'
import ActorDetails from './Views/ActorDetails/ActorDetails'
import NotFound from './Views/NotFound/NotFound'
import MyList from './Views/MyList/MyList'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MovieDiscover />
        </Route>
        <Route exact path="/movie-popular">
          <MoviePopular />
        </Route>
        <Route exact path="/my-list">
          <MyList />
        </Route>
        <Route exact path="/genre/:media_type/:genre/:id">
          <ListGenre />
        </Route>
        <Route exact path="/search/:search">
          <ListSearch />
        </Route>
        <Route exact path="/person/:id">
          <ActorDetails />
        </Route>
        <Route exact path="/:media_type/:id">
          <MovieDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
