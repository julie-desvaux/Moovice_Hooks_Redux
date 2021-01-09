import { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

export default function MyList() {

    const [favorites, setFavorites] = useState([])
    const [myList, setMyList] = useState(null)

    useEffect(() => {

        if (myList === null) {
            let myListStorage = localStorage.getItem('myList');
            myListStorage = JSON.parse(myListStorage);
            if (myListStorage) {
                let items = [];
                myListStorage.forEach(itemStorage => {
                    async function fetchDataStorage(itemStorage) {
                        const url = `${Config.API_ROOT}${itemStorage.media_type}/${itemStorage.id}?api_key=${Config.API_KEY}`;
                        const item = await axios.get(url).then(responseFetchData => {
                            return responseFetchData.data
                        })
                        items.push(item)
                        setFavorites(items)
                    }
                    fetchDataStorage(itemStorage)
                })
            }
            setMyList(myListStorage)
        }

    }, [myList, favorites])

    if (!favorites) {
        return (
            <div className="container">
                <h1>My List</h1>
                <h2>You don't have any favorites yet</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="title">My List</h1>
            <div className="container-cards">
                {favorites.map((favorite, index) => (
                    myList[index].media_type === "actor" ?
                        (
                            <Card 
                            actor={favorite}
                            key={favorite.id}
                        />
                        ):(
                            <Card 
                            movie={favorite}
                            key={favorite.id}
                        />
                        )
                ))}
            </div>
        </div>
    )
}
