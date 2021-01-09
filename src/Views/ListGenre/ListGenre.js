import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

export default function ListGenre() {

    const { media_type, genre, id } = useParams()
    const [moviesGenre, setMoviesGenre] = useState(null)

    useEffect(() => {

        async function fetchDataMovieGenre() {
            const url = `${Config.API_ROOT}discover/${media_type}?api_key=${Config.API_KEY}&sort_by=popularity.desc&with_genres=${id}`
            await axios.get(url).then((response) => {
                if (response.data) {
                    setMoviesGenre(response.data.results)
                }
            })
        }
        fetchDataMovieGenre()

    }, [media_type, id])

    if (!moviesGenre) {
        return null
    }

    return (
        <div className="container">
            <h1 className="text-center title">Result by genre : {genre}</h1>
            <div className="container-cards">
                {moviesGenre.map((movie) => {
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
