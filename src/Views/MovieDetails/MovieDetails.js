import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Modal from '../../Components/Modal/Modal'

export default function MovieDetails() {

    const { id } = useParams()
    const { movieDetails, trailer } = useSelector(state => ({ ...state.movieDetailsReducer }))
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
            await axios.get(urlTrailer).then((response) => {
                dispatch({
                    type: 'ADD_TRAILER',
                    payload: response.data.results[0]
                })
            })
        }

        fetchDataMovieDetails()
        fetchDataTrailer()

    }, [id, dispatch])

    if (!movieDetails || !trailer) {
        return null
    }

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-3">
                    <img className="img_details" src={`${Config.IMG_ROOT}${movieDetails.poster_path}`} alt={movieDetails.title} />
                </div>
                <div className="col-12 col-lg-8">
                    <h1 className="text-center">{movieDetails.title}</h1>
                    <h3 className="text-center">{movieDetails.tagline}</h3>
                    <div className="row mb-3">
                        {movieDetails.genres === undefined ? '' : movieDetails.genres.map((genre, i) => <div className="col-2 movie-genre text-center" key={i}>{genre.name}</div>)}
                        </div>
                        <h5>Synopsie : </h5>
                        <p>{movieDetails.overview}</p>
                        <h6>Release date : {movieDetails.release_date}</h6>
                        {trailer.id === undefined ? '' : 
                            <Modal 
                                movieDetails={movieDetails}
                                trailer={trailer}
                            />
                        }
                </div>
            </div>
        </div>
    )
}
