import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import MovieDiscover from "./Views/Movie/MovieDiscover";
import MoviePopular from "./Views/Movie/MoviePopular";
import MovieDetails from "./Views/Movie/MovieDetails/MovieDetails";
import TvDiscover from "./Views/TV/TvDiscover";
import TvOnAir from "./Views/TV/TvOnAir";
import ListSearch from "./Views/ListSearch/ListSearch";
import ListGenre from "./Views/ListGenre/ListGenre";
import ActorDetails from "./Views/ActorDetails/ActorDetails";
import NotFound from "./Views/NotFound/NotFound";
import MyList from "./Views/MyList/MyList";
import TvToday from "./Views/TV/TvToday";

function App() {
	const navbar = useRef(null);

	useEffect(() => {
		gsap.from(navbar.current, {
			autoAlpha: 0,
			ease: "none",
			delay: 1,
		});
	}, []);

	return (
		<Router>
			<NavBar useRef={navbar} />
			<Switch>
				<Route exact path="/">
					<MovieDiscover />
				</Route>
				<Route exact path="/movie-popular">
					<MoviePopular />
				</Route>
				<Route exact path="/tv-discover">
					<TvDiscover />
				</Route>
				<Route exact path="/tv-on-air">
					<TvOnAir />
				</Route>
				<Route exact path="/tv-today">
					<TvToday />
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
		</Router>
	);
}

export default App;
