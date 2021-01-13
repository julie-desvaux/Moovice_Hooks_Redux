import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import search from '../../Assets/Search.svg'
import menuIco from '../../Assets/MenuIco.svg'
import cross from '../../Assets/Cross.svg'
import './Navbar.scss'

export default function NavBar() {

    const { searchText, menu, smallScreen } = useSelector(state => ({ ...state.searchTextReducer }))
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    }, [])

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            dispatch({
                type: 'SMALL_SCREEN',
                payload: true
            })
        } else {
            dispatch({
                type: 'SMALL_SCREEN',
                payload: false
            })
        }
    }

    const hideMenu = () => {
        dispatch({
            type: 'SHOW_MENU',
            payload: !menu
        })
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const toggleNavRes = () => {
        dispatch({
            type: 'SHOW_MENU',
            payload: !menu
        })
    }

    return (
        <div className="navbar-container">
            <nav className="navbar-subcontainer">
                {(menu || !smallScreen) && (
                    <>
                    <ul className="listMenu">
                        <li onClick={hideMenu} className="linksNav">
                            <Button>
                                <Link className="link" to="/">
                                    Moovice
                                </Link>
                            </Button>
                        </li>
                        <li onClick={hideMenu} className="linksNav">
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <Link className="link">
                                    Movies
                                </Link>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link className="sublink" to="/">This Week</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link className="sublink" to="/popular">Popular</Link>
                                </MenuItem>
                            </Menu>
                        </li>
                        <li onClick={hideMenu} className="linksNav">
                            <Button>
                                <Link className="link" to="/my-list">
                                    My List
                                </Link>
                            </Button>
                        </li>
                    </ul>
                    <ul className="listMenu search-bar">
                        <li className="linksNav">
                            <form action="" className="formSubmit" onSubmit={handleSubmit}>
                                <input value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})} type="text" className="inputSearch" onFocus={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: ""})}/>
                                <Link className="link" to={{pathname: `/search/${searchText}`}}>
                                    <button type="submit" className="btn-search">
                                        <img src={search} alt="icon magnifying glass" className="logoGlass"/>
                                    </button>
                                </Link>
                            </form>
                        </li>
                    </ul>
                    </>
                )}
            </nav>
            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : cross} alt="Menu Icon Responsive" className="menuIco"/>
            </div>
        </div>
    )

}