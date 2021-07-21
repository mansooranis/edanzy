import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBarMain(props){
    return(
        <Navbar bg="light" expand="md" sticky="top">
            <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">Edanzy</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-md-auto">
                                <Link to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </Link>
                                <Nav.Link href="">CS</Nav.Link>
                                <Nav.Link href="">Math</Nav.Link>
                                <Nav.Link href="#link">Profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}