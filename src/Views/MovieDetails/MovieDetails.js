import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Modal from '../../Components/Modal/Modal'
import Card from '../../Components/Card/Card'
import './MovieDetails.scss'

export default function MovieDetails() {

    const { id } = useParams()
    const { movieDetails, trailer, actors } = useSelector(state => ({ ...state.movieDetailsReducer }))
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchDataMovieDetails() {
            const url = `${Config.API_ROOT}movie/${id}?api_key=${Config.API_KEY}`;
            await axios.get(url).then((response) => {
                dispatch({
                    type: 'ADD_MOVIE_DETAILS',
                    payload: response.data
                })
            })
        }
        
        async function fetchDataTrailer() {
            const urlTrailer = `${Config.API_ROOT}movie/${id}/videos?api_key=${Config.API_KEY}`;
            await axios.get(urlTrailer).then((responseTrailer) => {
                dispatch({
                    type: 'ADD_TRAILER',
                    payload: responseTrailer.data.results[0]
                })
            })
        }

        async function fetchDataActors() {
            const urlActors = `${Config.API_ROOT}movie/${id}/casts?api_key=${Config.API_KEY}`;
            await axios.get(urlActors).then((responseActors) => {
                dispatch({
                    type: 'ADD_ACTORS',
                    payload: responseActors.data.cast
                })
            })
        }

        fetchDataMovieDetails()
        fetchDataTrailer()
        fetchDataActors()

    }, [id, dispatch])

    if (!movieDetails || !trailer || !actors) {
        return null
    }

    return (
        <div className="container-movie-details">
            <div className="container-image" style={{ backgroundImage:`url(${Config.IMG_BG_ROOT}${movieDetails.backdrop_path})`}}>
                <div className="calque">
                    <div className="subcontainer-poster">
                        <img className="poster" src={`${Config.IMG_ROOT}${movieDetails.poster_path}`} alt={movieDetails.title} />
                    </div>
                    <div className="subcontainer-details">
                        <h1>{movieDetails.title}</h1>
                        <h3 className="tagline">{movieDetails.tagline}</h3>
                        <div className="movie-details">
                            {movieDetails.genres === undefined ? '' : movieDetails.genres.map((genre, i) => <div className="movie-genre-item" key={i}>{genre.name}</div>)}
                            </div>
                            <h4 className="subtitle">Synopsy : <span className="bold-normal">{movieDetails.overview}</span></h4>
                            <h4 className="subtitle">Release date : <span className="bold-normal">{movieDetails.release_date}</span></h4>
                            {trailer.id === undefined ? '' : 
                                <Modal 
                                    movieDetails={movieDetails}
                                    trailer={trailer}
                                />
                            }
                    </div>
                </div>
            </div>
            <div>
                <h2 className="title">Actors</h2>
                <div className="container-cards">
                    {actors.map((actor) => (
                        <Card 
                            actor={actor}
                            key={actor.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
