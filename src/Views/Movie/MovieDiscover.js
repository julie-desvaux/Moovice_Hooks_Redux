import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Config from '../../Config'
import Card from '../../Components/Card/Card'
import moment from 'moment'
import axios from 'axios'

export default function Discover() {

    const { discover } = useSelector(state => ({ ...state.discoverReducer }))
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchDataDiscover() {
            const TODAY = moment().format('YYYY-MM-DD')
            const NEXT_WEEK = moment().add(7, 'days').format('YYYY-MM-DD');
            const url = `${Config.API_ROOT}discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=${Config.API_KEY}`;
            await axios.get(url).then((response) => {
                dispatch({
                    type: 'ADD_DISCOVER',
                    payload: response.data.results
                })
            })
        }
        fetchDataDiscover()
    }, [dispatch])

    if (!discover) {
        return null
    }

    return (
        <div className="container">
            <h1 className="text-center title">Discover</h1>
            <div className="container-cards">
                {discover.map((movie) => (
                    <Card 
                        media_type="movie"
                        item={movie}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}
