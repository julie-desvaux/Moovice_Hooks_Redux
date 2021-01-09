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
                if (myListStorage.length !== 0) {
                    let items = [];
                    myListStorage.forEach(itemStorage => {
                        async function fetchDataStorage(itemStorage) {
                            const url = `${Config.API_ROOT}${itemStorage.media_type}/${itemStorage.id}?api_key=${Config.API_KEY}`;
                            const item = await axios.get(url).then(responseFetchData => responseFetchData.data)
                            item.media_type = itemStorage.media_type
                            items.push(item)
                            setFavorites(items)
                        }
                        fetchDataStorage(itemStorage)
                    })
                    setMyList(myListStorage)
                }
            }
        }

    }, [myList, favorites])

    console.log("favorites", favorites)
    console.log("myList", myList)

    if (!myList) {
        return (
            <div className="container">
                <h1 className="title">My List</h1>
                <h2>You don't have any favorites yet</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="title">My List</h1>
            <div className="container-cards">
                {favorites.map((favorite) => (
                    favorite.media_type === "person" ?
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
