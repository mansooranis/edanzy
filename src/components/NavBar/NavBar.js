import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./NavBar.css"

export default function NavBarMain(){
    return(
        <Navbar bg="light" expand="md" sticky="top">
            <Container>
                    <Navbar.Brand href="#home">Edanzy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-md-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="">CS</Nav.Link>
                                <Nav.Link href="">Math</Nav.Link>
                                <Nav.Link href="#link">Profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}