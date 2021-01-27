import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import search from '../../Assets/Search.svg'
import './Navbar.scss'

export default function NavBar() {

    const { searchText } = useSelector(state => ({ ...state.searchTextReducer }))
    const [widthSreen, setWidthScreen] = useState(window.innerWidth)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [subMenuDecouvrir, showSubMenuDecouvrir] = useState(false);
	const [subMenuParticiper, showSubMenuParticiper] = useState(false);
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

    const handleSubmit = (e) => {
        toogleNavSmallScreen();
        e.preventDefault();
    }

    const menuDecouvrirOnClick = (event) => {
        event.stopPropagation();
        showSubMenuParticiper(false);
        showSubMenuDecouvrir(!subMenuDecouvrir);
	}

	const menuParticiperOnClick = (event) => {
        event.stopPropagation();
        showSubMenuDecouvrir(false);
        showSubMenuParticiper(!subMenuParticiper);
	}
	
	const toogleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
	}

    return (
        <div className="navbar-container">
            <nav className="navbar-subcontainer">
                <Link className="link-logo" to="#">
                    MOOVICE
                </Link>
                {(widthSreen > 900 || toggleMenu) && (
                    <>
                        <ul className="listMenu">
        
                            <div className="container-submenu">
                                <li onClick={toogleNavSmallScreen} className="linksNav">
                                    <Link className="link link-mobile" onClick={(e) => menuDecouvrirOnClick(e)} to="#">
                                        Movies
                                    </Link>
                                </li>
                                {(widthSreen < 900 && toggleMenu) ? (
                                    <ul className="sub-menu-mobile">
                                        <Link to="/"  onClick={toogleNavSmallScreen} className="link" to="#">
                                            <li className="li-menu-mobile">Discover</li>
                                        </Link>
                                        <Link to="/movie-popular" onClick={toogleNavSmallScreen} className="link">
                                            <li className="li-menu-mobile">Popular</li>
                                        </Link>
                                    </ul>
                                ) : (
                                    subMenuDecouvrir ? (
                                        <div className="dropdown-menu">
                                            <ul>
                                                <Link to="/" className="link">
                                                    <li className="li-dropdown" onClick={(e) => menuDecouvrirOnClick(e)}>Discover</li>
                                                </Link>
                                                <Link to="/movie-popular" className="link">
                                                    <li className="li-dropdown" onClick={(e) => menuDecouvrirOnClick(e)}>Popular</li>
                                                </Link>
                                            </ul>
                                        </div>
                                    ) : null
                                )}
                            </div>

                            <div className="container-submenu">
                                <li onClick={toogleNavSmallScreen} className="linksNav">
                                    <Link className="link link-mobile" onClick={(e) => menuParticiperOnClick(e)} to="#">
                                        Tv
                                    </Link>
                                </li>
                                {(widthSreen < 900 && toggleMenu) ? (
                                    <ul className="sub-menu-mobile">
                                        <Link to="/tv-discover"  onClick={toogleNavSmallScreen} className="link sublink-mobile">
                                            <li className="li-menu-mobile">Discover</li>
                                        </Link>
                                        <Link to="/tv-on-air" onClick={toogleNavSmallScreen} className="link sublink-mobile">
                                            <li className="li-menu-mobile">On the air</li>
                                        </Link>
                                        <Link to="/tv-today" onClick={toogleNavSmallScreen} className="link sublink-mobile">
                                            <li className="li-menu-mobile">Tv Today</li>
                                        </Link>
                                    </ul>
                                ) : (
                                    subMenuParticiper ? (
                                        <div className="dropdown-menu">
                                            <ul>
                                                <Link to="/tv-discover" className="link">
                                                    <li className="li-dropdown" onClick={(e) => menuParticiperOnClick(e)}>Discover</li>
                                                </Link>
                                                <Link to="/tv-on-air" className="link">
                                                    <li className="li-dropdown" onClick={(e) => menuParticiperOnClick(e)}>On Air</li>
                                                </Link>
                                                <Link to="/tv-today" className="link">
                                                    <li className="li-dropdown" onClick={(e) => menuParticiperOnClick(e)}>Tv Today</li>
                                                </Link>
                                            </ul>
                                        </div>
                                    ) : null
                                )}
                            </div>
                            
                            <li onClick={toogleNavSmallScreen} className="linksNav">
                                <Link className="link link-mobile link-mobile-solo" to="/my-list">
                                    My List
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


                    // <>
                    // <ul className="listMenu">
                    //     <div className="item-menu" onClick={(e) => iconOnClick(e)}>
                    //         <li>MOOVIES</li>
                    //     </div>
                    //     {(widthSreen < 900 && toggleMenu) ? (
                    //         <ul className="sub-menu-mobile">
                    //             <Link to={{pathname: `/`}}  onClick={toogleNavSmallScreen}>
                    //                 <li className="li-menu-mobile">THIS WEEK</li>
                    //             </Link>
                    //             <Link to={{pathname: `/movie-popular`}} onClick={toogleNavSmallScreen}>
                    //                 <li className="li-menu-mobile">POPULAR</li>
                    //             </Link>
                    //         </ul>
                    //     ) : (
                    //         menu ? (
                    //             <div className="dropdown-menu">
                    //                 <ul>
                    //                     <Link to={{pathname: `/`}}>
                    //                         <li className="li-dropdown" onClick={(e) => iconOnClick(e)}>THIS WEEK</li>
                    //                     </Link>
                    //                     <Link to={{pathname: `/popular`}}>
                    //                         <li className="li-dropdown" onClick={(e) => iconOnClick(e)}>POPULAR</li>
                    //                     </Link>
                    //                 </ul>
                    //             </div>
                    //         ) : null
                    //     )}
                        
                    //     <li onClick={toogleNavSmallScreen} className="linksNav">
                    //         <Link className="link" to={{pathname: `/my-list`}} onClick={toogleNavSmallScreen}>
                    //             MY LIST
                    //         </Link>
                    //     </li>
                    // </ul>
                    // <ul className="listMenu search-bar">
                    //     <li className="linksNav">
                    //         <form action="" className="formSubmit" onSubmit={handleSubmit}>
                    //             <input value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})} type="text" className="inputSearch" onFocus={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: ""})}/>
                    //             <Link className="link" to={{pathname: `/search/${searchText}`}}>
                    //                 <button type="submit" className="btn-search">
                    //                     <img src={search} alt="icon magnifying glass" className="logoGlass" onClick={toogleNavSmallScreen}/>
                    //                 </button>
                    //             </Link>
                    //         </form>
                    //     </li>
                    // </ul>
                    // </>
                )}
            </nav>
            <div className={(widthSreen > 900 || toggleMenu) ? "menuResBtn active" : "menuResBtn"} >
				<div className="line" onClick={toogleNavSmallScreen}></div>
            </div>
        </div>
    )

}