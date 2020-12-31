import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar() {
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
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}
