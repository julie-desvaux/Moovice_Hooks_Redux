import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import './Icon.scss'

export default function Icon({ onClick, id, icon }) {

    return (
        <>
            <span className="material-icons"  onClick={() => onClick(id)}>
                {icon}
            </span>
        </>
    )

}
