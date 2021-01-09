import { useEffect, useState } from 'react'
import './Icon.scss'

const lodash = require('lodash')

export default function Icon({ id, media_type }) {

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
            const favoriteTemp = {
                id,
                media_type
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
