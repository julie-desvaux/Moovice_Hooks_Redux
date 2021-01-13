import { useEffect, useState } from 'react'
import './Icon.scss'

const lodash = require('lodash')

export default function Icon({ id, media_type, item }) {

    const [icon, setIcon] = useState("favorite_border")

    useEffect(() => {

        let myList = localStorage.getItem('myList');
        myList = JSON.parse(myList);

        const index = lodash.findIndex(myList, function(o) { return (o.id === id && o.media_type === media_type) });
        if (index !== -1) {
            setIcon("favorite")
        }

    }, [id, media_type])

    const handleAddFavorite = (id, media_type) => {
        let myList = localStorage.getItem('myList');
        myList = JSON.parse(myList);
        if (icon === "favorite_border") {
            if (myList === null) {
                myList = []
            }
            let favoriteTemp = {}
            if (media_type === "person") {
                favoriteTemp = {
                    id,
                    media_type,
                    profile_path: item.profile_path, 
                    gender: item.gender,
                    name: item.name,
                    character: item.character
                }
            } else if (media_type === "movie") {
                favoriteTemp = {
                    id,
                    media_type,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date
                }
            } else if (media_type === "tv") {
                favoriteTemp = {
                    id,
                    media_type,
                    poster_path: item.poster_path,
                    name: item.name
                }
            }
            myList.push(favoriteTemp)
            localStorage.setItem("myList", JSON.stringify(myList))
            setIcon("favorite");
        } else {
            const index = lodash.findIndex(myList, function(o) { return (o.id === id && o.media_type === media_type) })
            myList.splice(index, 1)
            localStorage.setItem("myList", JSON.stringify(myList))
            setIcon("favorite_border")
        }
    }

    return (
        <>
            <span className="material-icons"  onClick={() => handleAddFavorite(id, media_type)}>
                {icon}
            </span>
        </>
    )

}
