import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

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
        <div className="container mt-5">
            <div className="row image">
                <div className="calque">
                    <div className="col-12 col-lg-4 mt-3 mb-3">
                        <img className="img_details" src={`${Config.IMG_ROOT}${actorDetails.profile_path}`} alt={actorDetails.name} />
                    </div>
                    <div className="col-12 col-lg-8 mt-3 mb-5">
                        <h1 className="text-center">{actorDetails.name}</h1>
                        <p className="text-center mt-3 mb-5">{actorDetails.biography}</p>
                        <div className="row mb-3">
                            <h5 className="mt-5">Birthday : </h5>
                            <p>{actorDetails.birthday}</p>
                            {actorDetails.homepage !== null ? 
                                (
                                    <>
                                        <h5>Homepage : </h5>
                                        <p>{actorDetails.homepage}</p>
                                    </>
                                ):null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between mt-5">
                <h2 className="mt-2 mb-5 text-center title">Filmography</h2>
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
