import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar() {

    const { searchText } = useSelector(state => ({ ...state.searchTextReducer }))
    const dispatch = useDispatch()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Moovice</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">This Week</Nav.Link>
                    <Nav.Link href="/week_battle">This Week Battle</Nav.Link>
                    <Nav.Link href="/popular">Popular</Nav.Link>
                    <Nav.Link href="/popular_battle">Popular Battle</Nav.Link>
                    <Nav.Link href="/my_list">My List</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={(e) => dispatch({type: 'ADD_SEARCH_TEXT', payload: e.target.value})}/>
                    <Button variant="outline-info" href={`/search/${searchText}`}>Search</Button>
                </Form>
            </Navbar>
        </>
    )
}
