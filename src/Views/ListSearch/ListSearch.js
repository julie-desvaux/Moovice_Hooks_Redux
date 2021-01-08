import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

export default function ListSearch() {

    const { search } = useParams()
    // const { searchList } = useSelector(state => ({ ...state.searchList }))
    const [ searchList, setSearchList ] = useState(null)
    // const dispatch = useDispatch()

    useEffect(() => {

        async function fetchDataSearch() {
            const url = `${Config.API_ROOT}search/multi?include_adult=false&api_key=${Config.API_KEY}&query=${search}`
            await axios.get(url).then((response) => {
                setSearchList(response.data.results)
                // dispatch({
                //     type: 'ADD_SEARCH_LIST',
                //     payload: response.data.results
                // })
            })
        }
        fetchDataSearch()

    }, [search])

    console.log("searchList", searchList)

    if (!searchList) {
        return null
    }

    return (
        <div className="container">
            <h1 className="text-center title">Result for : {search}</h1>
            <div className="container-cards">
                {searchList.map((searchMovie) => {
                    return(
                        <Card 
                            movie={searchMovie}
                            key={searchMovie.id}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}
