import { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../../Config'
import Card from '../../Components/Card/Card'

export default function MyList() {

    const [myList, setMyList] = useState(null)

    useEffect(() => {

        if (myList === null) {
            let myListStorage = localStorage.getItem('myList');
            myListStorage = JSON.parse(myListStorage);
            if (myListStorage) {
                if (myListStorage.length !== 0) {
                    setMyList(myListStorage)
                }
            } else {
                return null
            }
        }

    }, [myList])

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
                {myList.map((favorite) => (
                    <Card 
                        media_type={favorite.media_type}
                        item={favorite}
                        key={favorite.id}
                    />
                ))}
            </div>
        </div>
    )
}
