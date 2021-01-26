import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import search from '../../Assets/Search.svg'
import './Navbar.scss'

export default function NavBar() {

    const { searchText, smallScreen } = useSelector(state => ({ ...state.searchTextReducer }))
    const [widthSreen, setWidthScreen] = useState(window.innerWidth)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [menu, showMenu] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        const changeWidth = () => {
            setWidthScreen(window.innerWidth)
            if (window.innerWidth > 900) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    function windowOnClick(event) {
        if (!event.target.matches('.koya-icon-menu')) {
          showMenu(false);
          window.removeEventListener('click', windowOnClick);
        }
    }
    
    function iconOnClick(event) {
        console.log("click")
        event.stopPropagation();
        showMenu(!menu);
    }

    const handleSubmit = (e) => {
        toogleNavSmallScreen();
        e.preventDefault();
    }

    const toogleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="navbar-container">
            <nav className="navbar-subcontainer">
                <Link className="link-logo" to="">
                    MOOVICE
                </Link>
                {(widthSreen > 900 || toggleMenu) && (
                    <>
                    <ul className="listMenu">
                        <div className="item-menu" onClick={(e) => iconOnClick(e)}>
                            <li>MOOVIES</li>
                        </div>
                        {(widthSreen < 900 && toggleMenu) ? (
                            <ul className="sub-menu-mobile">
                                <Link to={{pathname: `/`}}  onClick={toogleNavSmallScreen}>
                                    <li className="li-menu-mobile">THIS WEEK</li>
                                </Link>
                                <Link to={{pathname: `/movie-popular`}} onClick={toogleNavSmallScreen}>
                                    <li className="li-menu-mobile">POPULAR</li>
                                </Link>
                            </ul>
                        ) : (
                            menu ? (
                                <div className="dropdown-menu">
                                    <ul>
                                        <Link to={{pathname: `/`}}>
                                            <li className="li-dropdown" onClick={(e) => iconOnClick(e)}>THIS WEEK</li>
                                        </Link>
                                        <Link to={{pathname: `/popular`}}>
                                            <li className="li-dropdown" onClick={(e) => iconOnClick(e)}>POPULAR</li>
                                        </Link>
                                    </ul>
                                </div>
                            ) : null
                        )}
                        <li onClick={toogleNavSmallScreen} className="linksNav">
                            <Link className="link" to={{pathname: `/my-list`}} onClick={toogleNavSmallScreen}>
                                MY LIST
                            </Link>
                        </li>
                    </ul>
                    <ul className="listMenu search-bar">
                        <li className="linksNav">
                            <form action="" className="formSubmit" onSubmit={handleSubmit}>
                                <input value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})} type="text" className="inputSearch" onFocus={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: ""})}/>
                                <Link className="link" to={{pathname: `/search/${searchText}`}}>
                                    <button type="submit" className="btn-search">
                                        <img src={search} alt="icon magnifying glass" className="logoGlass" onClick={toogleNavSmallScreen}/>
                                    </button>
                                </Link>
                            </form>
                        </li>
                    </ul>
                    </>
                )}
            </nav>
            <div className={(widthSreen > 900 || toggleMenu) ? "menuResBtn active" : "menuResBtn"} >
				<div className="line" onClick={toogleNavSmallScreen}></div>
            </div>
        </div>
    )

}