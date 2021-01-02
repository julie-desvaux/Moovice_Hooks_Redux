import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import search from '../../Assets/Search.svg';
import menuIco from '../../Assets/MenuIco.svg';
import cross from '../../Assets/Cross.svg';

export default function NavBar() {

    const { searchText, menu, smallScreen } = useSelector(state => ({ ...state.searchTextReducer }))
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
        <div>
            <nav className="headerTop">
                {(menu || !smallScreen) && (
                    <ul className="listMenu">
                        <li onClick={hideMenu} className="linksNav">
                            <Link className="link" to="/">
                                Moovice
                            </Link>
                        </li>
                        <li onClick={hideMenu} className="linksNav">
                            <Link className="link" to="/">
                                This Week
                            </Link>
                        </li>
                        <li onClick={hideMenu} className="linksNav">
                            <Link className="link" to="/popular">
                                Popular
                            </Link>   
                        </li>
                        <li onClick={hideMenu} className="linksNav">
                            <Link className="link" to="/my_list">
                                My List
                            </Link>   
                        </li>
                        <li className="linksNav">
                            <form action="" className="formSubmit" onSubmit={handleSubmit}>
                                <input value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})} type="text" className="inputSearch"/>
                                <Link className="link" to={{pathname: `/search/${searchText}`}}>
                                    <button type="submit">
                                        <img src={search} alt="icon magnifying glass" className="logoGlass"/>
                                    </button>
                                </Link>
                            </form>
                        </li>
                    </ul>
                )}
            </nav>
            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : cross} alt="Menu Icon Responsive" className="menuIco"/>
            </div>
        </div>
    )





    // return (
    //     <>
    //         <Navbar bg="dark" variant="dark">
    //             <Navbar.Brand href="/">Moovice</Navbar.Brand>
    //             <Nav className="mr-auto">
    //                 <Nav.Link href="/">This Week</Nav.Link>
    //                 <Nav.Link href="/week_battle">This Week Battle</Nav.Link>
    //                 <Nav.Link href="/popular">Popular</Nav.Link>
    //                 <Nav.Link href="/popular_battle">Popular Battle</Nav.Link>
    //                 <Nav.Link href="/my_list">My List</Nav.Link>
    //             </Nav>
    //             <Form inline>
    //                 <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})}/>
    //                 <Button variant="outline-info" href={`/search/${searchText}`}>Search</Button>
    //             </Form>
    //         </Navbar>
    //     </>
    // )
}
