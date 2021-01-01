import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

export default function ListSearch() {

    const { search } = useParams()
    const { searchText } = useSelector(state => ({ ...state.searchText }))
    const [ searchList, setSearchList ] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchDataSearch() {
            const url = `${Config.API_ROOT}search/movie?include_adult=false&api_key=${Config.API_KEY}&query=${search}`
            await axios.get(url).then((response) => {
                console.log(response.data.results)
                setSearchList(response.data.results)
                // dispatch({
                //     type: 'ADD_SEARCH_TEXT',
                //     payload: response.data.results
                // })
            })
        }
        fetchDataSearch()

    }, [search, dispatch])

    console.log(searchList)

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
