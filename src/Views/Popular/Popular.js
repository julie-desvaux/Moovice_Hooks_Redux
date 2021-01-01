import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Config from '../../Config'
import axios from 'axios'
import Card from '../../Components/Card/Card'

export default function Popular() {

    const { popular } = useSelector(state => ({ ...state.popularReducer }))
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchDataPopular() {
            const url = `${Config.API_ROOT}movie/popular?api_key=${Config.API_KEY}&include_adult=false`;
            await axios.get(url).then((response) => {
                dispatch({
                    type: 'ADD_POPULAR',
                    payload: response.data.results
                })
            })
        }
        fetchDataPopular()
        
    }, [dispatch])

    if (!popular) {
        return null
    }

    return (
        <div className="container">
            <h1 className="text-center title">Popular</h1>
            <div className="container-cards">
                {popular.map((movie) => {
                    return(
                        <Card 
                            movie={movie}
                            key={movie.id}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}
