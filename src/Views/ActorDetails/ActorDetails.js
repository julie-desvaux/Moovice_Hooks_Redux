import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'
import '../MovieDetails/MovieDetails.scss'

export default function ActorDetails() {

    const { id } = useParams()
    const { actorDetails, actorMoviesList } = useSelector(state => ({ ...state.actorDetailsReducer }))
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchDataActorDetails() {
            const url = `${Config.API_ROOT}person/${id}?api_key=${Config.API_KEY}`;
            await axios.get(url).then((response) => {
                dispatch({
                    type: 'ADD_ACTOR_DETAILS',
                    payload: response.data
                })
            })
        }

        async function fetchDataMoviesList() {
            const url = `${Config.API_ROOT}person/${id}/movie_credits?api_key=${Config.API_KEY}`;
            await axios.get(url).then((responseMoviesList) => {
                dispatch({
                    type: 'ADD_ACTOR_MOVIES_LIST',
                    payload: responseMoviesList.data.cast
                })
            })
        }

        fetchDataActorDetails()
        fetchDataMoviesList()

    }, [id, dispatch])

    if (!actorDetails || !actorMoviesList) {
        return null
    }

    return (
        <div className="container">
            <div className="container-image">
                <div className="calque">
                    <div className="subcontainer-poster">
                        <img className="poster" src={`${Config.IMG_ROOT}${actorDetails.profile_path}`} alt={actorDetails.name} />
                    </div>
                    <div className="subcontainer-details">
                        <h1>{actorDetails.name}</h1>
                        <p className="tagline">{actorDetails.biography}</p>
                        <div className="details">
                            <h4 className="subtitle">Birthday : <span className="bold-normal">{actorDetails.birthday}</span></h4>
                            {actorDetails.homepage !== null ? 
                                (
                                    <>
                                        <h4 className="subtitle">Homepage : <span className="bold-normal"><a className="font-size-1" href={actorDetails.homepage}>{actorDetails.homepage}</a></span></h4>
                                        
                                    </>
                                ):null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="title">Filmography</h2>
                <div className="container-cards">
                    {actorMoviesList.map((actorMovie) => (
                        <Card 
                            actorMovie={actorMovie}
                            key={actorMovie.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
