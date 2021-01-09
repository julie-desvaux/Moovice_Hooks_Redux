import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'
import '../MovieDetails/MovieDetails.scss'

export default function ActorDetails() {

    const { id } = useParams()
    const { actorDetails, actorMoviesList, actorTvList } = useSelector(state => ({ ...state.actorDetailsReducer }))
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

        async function fetchDataTvList() {
            const url = `${Config.API_ROOT}person/${id}/tv_credits?api_key=${Config.API_KEY}`;
            await axios.get(url).then((responseTvList) => {
                dispatch({
                    type: 'ADD_ACTOR_TV_LIST',
                    payload: responseTvList.data.cast
                })
            })
        }

        fetchDataActorDetails()
        fetchDataMoviesList()
        fetchDataTvList()

    }, [id, dispatch])

    if (!actorDetails || !actorMoviesList) {
        return null
    }

    return (
        <div className="container">
            <div className="container-image">
                <div className="calque">
                    <div className="subcontainer-poster">
                        {actorDetails.profile_path ? 
                            <img className="poster" src={`${Config.IMG_ROOT}${actorDetails.profile_path}`} alt={actorDetails.name} />
                            : null
                        }
                        
                    </div>
                    <div className="subcontainer-details">
                        <h1 className="lemon">{actorDetails.name}</h1>
                        <p className="tagline">{actorDetails.biography}</p>
                        <div className="details">
                            {actorDetails.birthday ?
                                <h4 className="subtitle">Birthday : <span className="bold-normal">{actorDetails.birthday}</span></h4>
                                : null
                            }
                            {actorDetails.homepage ? 
                                <h4 className="subtitle">Homepage : <span className="bold-normal"><a className="font-size-1" href={actorDetails.homepage}>{actorDetails.homepage}</a></span></h4>
                                :null
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
                            media_type="movie"
                            item={actorMovie}
                            key={actorMovie.id + actorMovie.title}
                        />
                    ))}
                </div>
            </div>
            {actorTvList ?
                (<div>
                    <h2 className="title">TV</h2>
                    <div className="container-cards">
                        {actorTvList.map((actorTv) => (
                            <Card 
                                media_type="tv"
                                item={actorTv}
                                key={actorTv.id + actorTv.name}
                            />
                        ))}
                    </div>
                </div>
                ) : null
            }
            
        </div>
    )
}
