import { useEffect } from 'react'
import Config from '../../Config'
import axios from 'axios'

export default function Discover() {

    useEffect(() => {
        async function fetchDataDiscover() {
            const url = `${Config.API_ROOT}movie/popular?api_key=${Config.API_KEY}`;
            await axios.get(url).then((response) => {console.log(response.data)})
        }
        fetchDataDiscover()
    })

    return (
        <div>
            
        </div>
    )
}
