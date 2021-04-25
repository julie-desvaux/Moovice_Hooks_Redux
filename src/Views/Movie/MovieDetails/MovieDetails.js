import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Config from "../../../Config";
import Modal from "../../../Components/Modal/Modal";
import Card from "../../../Components/Card";
import hourglass from "../../../Assets/hourglass.svg";
import "./MovieDetails.scss";

export default function MovieDetails() {
	const { media_type, id } = useParams();
	const { movieDetails, trailer, actors, toggleModal, watchInfos } = useSelector((state) => ({
		...state.movieDetailsReducer,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchDataMovieDetails() {
			const url = `${Config.API_ROOT}${media_type}/${id}?api_key=${Config.API_KEY}`;
			await axios.get(url).then((response) => {
				if (response) {
					dispatch({
						type: "ADD_MOVIE_DETAILS",
						payload: response.data,
					});
				}
			});
		}

		async function fetchDataTrailer() {
			const urlTrailer = `${Config.API_ROOT}${media_type}/${id}/videos?api_key=${Config.API_KEY}`;
			await axios.get(urlTrailer).then((responseTrailer) => {
				if (responseTrailer) {
					dispatch({
						type: "ADD_TRAILER",
						payload: responseTrailer.data.results[0],
					});
				}
			});
		}

		async function fetchDataActors() {
			let urlActors = "";
			if (media_type === "tv") {
				urlActors = `${Config.API_ROOT}tv/${id}/credits?api_key=${Config.API_KEY}`;
			} else {
				urlActors = `${Config.API_ROOT}${media_type}/${id}/casts?api_key=${Config.API_KEY}`;
			}
			await axios.get(urlActors).then((responseActors) => {
				if (responseActors.data) {
					dispatch({
						type: "ADD_ACTORS",
						payload: responseActors.data.cast,
					});
				}
			});
		}

		async function fetchDataWatchInfos() {
			const urlWatchInfos = `${Config.API_ROOT}${media_type}/${id}/watch/providers?api_key=${Config.API_KEY}`;
			await axios.get(urlWatchInfos).then((responseWatchInfos) => {
				if (responseWatchInfos) {
					dispatch({
						type: "ADD_WATCH_INFO",
						payload: responseWatchInfos.data.results.FR,
					});
				}
			});
		}

		fetchDataMovieDetails();
		fetchDataTrailer();
		fetchDataActors();
		fetchDataWatchInfos();
	}, [id, dispatch, media_type]);

	const convertFormatMoney = (money) => {
		return new Intl.NumberFormat("us-US", { style: "currency", currency: "USD" }).format(money);
	};

	const runtimeFormat = (runtime) => {
		let reste = runtime;
		let nbHours = Math.floor(reste / 60);
		reste -= nbHours * 60;
		let result = nbHours + "h " + reste + "min";
		return result;
	};

	const toggleModalFunction = () => {
		dispatch({
			type: "TOGGLE_MODAL",
			payload: !toggleModal,
		});
	};

	if (!movieDetails || !trailer || !actors) {
		return null;
	}

	return (
		<div className="container-movie-details">
			<div
				className="container-image"
				style={{ backgroundImage: `url(${Config.IMG_BG_ROOT}${movieDetails.backdrop_path})` }}
			>
				<div className="calque">
					<div className="subcontainer-poster">
						<img className="poster" src={`${Config.IMG_ROOT}${movieDetails.poster_path}`} alt={movieDetails.title} />
					</div>
					<div className="subcontainer-details overflow">
						<h1 className="lemon">{media_type === "movie" ? movieDetails.title : movieDetails.name}</h1>
						<h3 className="tagline">{movieDetails.tagline}</h3>
						<div className="movie-details">
							{movieDetails.genres === undefined
								? ""
								: movieDetails.genres.map((genre, i) => (
										<div className="movie-genre-item" key={i}>
											<Link
												className="movie-genre-item"
												to={{ pathname: `/genre/${media_type}/${genre.name}/${genre.id}` }}
											>
												{genre.name}
											</Link>
										</div>
								  ))}
						</div>
						<h4 className="subtitle lemon">
							Synopsy : <span className="bold-normal">{movieDetails.overview}</span>
						</h4>
						<div className="flex">
							{movieDetails.release_date ? (
								<h4 className="subtitle lemon margin-right">
									Release date : <span className="bold-normal">{movieDetails.release_date}</span>
								</h4>
							) : null}
							{movieDetails.first_air_date ? (
								<h4 className="subtitle lemon margin-right">
									First air date: <br />
									<span className="bold-normal">{movieDetails.first_air_date}</span>
								</h4>
							) : null}
							{movieDetails.last_air_date ? (
								<h4 className="subtitle lemon margin-right">
									Last air date: <br />
									<span className="bold-normal">{movieDetails.last_air_date}</span>
								</h4>
							) : null}
							<h4 className="subtitle lemon margin-right">
								Status : <span className="bold-normal">{movieDetails.status}</span>
							</h4>
							{movieDetails.runtime ? (
								<div className="subtitle lemon margin-right flex">
									<img className="img-h4" src={hourglass} alt="Runtime" /> :{" "}
									<span className="bold-normal"> {runtimeFormat(movieDetails.runtime)}</span>
								</div>
							) : null}
							{movieDetails.number_of_seasons ? (
								<h4 className="subtitle lemon margin-right">
									Season(s) : <span className="bold-normal">{movieDetails.number_of_seasons}</span>
								</h4>
							) : null}
							{movieDetails.number_of_episodes ? (
								<h4 className="subtitle lemon margin-right">
									Episode(s) : <span className="bold-normal">{movieDetails.number_of_episodes}</span>
								</h4>
							) : null}
						</div>
						<div className="flex">
							{movieDetails.budget ? (
								movieDetails.budget !== 0 ? (
									<h4 className="subtitle lemon margin-right">
										Budget : <span className="bold-normal">{convertFormatMoney(movieDetails.budget)}</span>
									</h4>
								) : null
							) : null}
							{movieDetails.revenue ? (
								movieDetails.revenue !== 0 ? (
									<h4 className="subtitle lemon">
										Revenue : <span className="bold-normal">{convertFormatMoney(movieDetails.revenue)}</span>
									</h4>
								) : null
							) : null}
						</div>
						{movieDetails.homepage ? (
							<h4 className="subtitle lemon">
								Homepage :
								<span className="bold-normal">
									<a className="font-size-1" href={movieDetails.homepage}>
										{movieDetails.homepage}
									</a>
								</span>
							</h4>
						) : null}
						{trailer.id === undefined ? (
							""
						) : (
							<Modal
								movieDetails={movieDetails}
								trailer={trailer}
								toggleModalFunction={toggleModalFunction}
								toggleModal={toggleModal}
								media_type={media_type}
							/>
						)}
						{watchInfos ? (
							<div className="watch-infos">
								{watchInfos.flatrate ? (
									<>
										<h4 className="subtitle lemon">In streaming with subscription</h4>
										<div className="flex">
											{watchInfos.flatrate.map((watchInfo, index) => (
												<img
													className="logo-watch"
													src={`${Config.STREAM_IMG_ROOT}${watchInfo.logo_path}`}
													alt={watchInfo.provider_name}
													key={index}
												/>
											))}
										</div>
									</>
								) : null}
								{watchInfos.rent ? (
									<>
										<h4 className="subtitle lemon">For rent</h4>
										<div className="flex">
											{watchInfos.rent.map((watchInfo, index) => (
												<img
													className="logo-watch"
													src={`${Config.STREAM_IMG_ROOT}${watchInfo.logo_path}`}
													alt={watchInfo.provider_name}
													key={index}
												/>
											))}
										</div>
									</>
								) : null}
								{watchInfos.buy ? (
									<>
										<h4 className="subtitle lemon">For buy</h4>
										<div className="flex">
											{watchInfos.buy.map((watchInfo, index) => (
												<img
													className="logo-watch"
													src={`${Config.STREAM_IMG_ROOT}${watchInfo.logo_path}`}
													alt={watchInfo.provider_name}
													key={index}
												/>
											))}
										</div>
									</>
								) : null}
							</div>
						) : null}
					</div>
				</div>
			</div>
			<div>
				<h2 className="title">Actors</h2>
				<div className="container-cards">
					{actors.map((actor) => (
						<Card media_type="person" item={actor} key={actor.id} />
					))}
				</div>
			</div>
		</div>
	);
}
