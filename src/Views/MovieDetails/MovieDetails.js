import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Modal from '../../Components/Modal/Modal'
import Card from '../../Components/Card/Card'

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

    console.log('actors :', actors)

    if (!movieDetails || !trailer || !actors) {
        return null
    }

    return (
        <div className="container mt-5">
            <div className="row image" style={{ backgroundImage:`url(${Config.IMG_BG_ROOT}${movieDetails.backdrop_path})`}}>
                <div className="calque">
                    <div className="col-12 col-lg-4 mt-3 mb-3">
                        <img className="img_details" src={`${Config.IMG_ROOT}${movieDetails.poster_path}`} alt={movieDetails.title} />
                    </div>
                    <div className="col-12 col-lg-8 mt-3 mb-5">
                        <h1 className="text-center">{movieDetails.title}</h1>
                        <h3 className="text-center mt-3 mb-5">{movieDetails.tagline}</h3>
                        <div className="row mb-3">
                            {movieDetails.genres === undefined ? '' : movieDetails.genres.map((genre, i) => <div className="col-2 movie-genre text-center" key={i}>{genre.name}</div>)}
                            </div>
                            <h5 className="mt-5">Synopsy : </h5>
                            <p>{movieDetails.overview}</p>
                            <h6 className="mt-3 mb-5">Release date : {movieDetails.release_date}</h6>
                            {trailer.id === undefined ? '' : 
                                <Modal 
                                    movieDetails={movieDetails}
                                    trailer={trailer}
                                />
                            }
                    </div>
                </div>
            </div>
            <div className="row justify-content-between mt-5">
                <h2 className="mt-2 mb-5 text-center title">Actors</h2>
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
